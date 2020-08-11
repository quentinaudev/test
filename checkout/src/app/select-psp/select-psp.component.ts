import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PspService } from '../psp.service';
import { DomSanitizer } from '@angular/platform-browser';


declare function redirect(params:string);

@Component({
  selector: 'app-select-psp',
  templateUrl: './select-psp.component.html',
  styleUrls: ['./select-psp.component.css']
})

export class SelectPspComponent implements OnInit {

  agree : any = false;
  title = 'checkout';
  token : string ;
  striperesponse: any;
  selectedPsp = 1;
  selectedPspOrderInfo : any;
  library: any;
  listPsp: any;
  dangerousUrl: string;
  trustedUrl: any;
  sub: any;
  oid: string;
  shopUrl: string;
  montantcommande: string;

  constructor(
    public activatedroute: ActivatedRoute,
    public route: ActivatedRoute,
    public router: Router,
    private pspService: PspService,private sanitizer: DomSanitizer
    ) { 
      
    }



    ngOnInit() {
      // this.oid = this.route.snapshot.paramMap.get("oid");
      this.activatedroute.queryParams.subscribe(params => {
        const oid = params['oid'];
        this.oid = oid;
        console.log("oid: " + oid );
        if(this.oid == null) return;
        // if(this.oid == null) {
        //   this.router.navigateByUrl("/error");
        // }
        this.pspService.getSelectPspOrderInfo(oid).
        subscribe( {
          next: data => {
           console.log("donnee");
           console.log(data);
           console.log("--------------------");

           this.selectedPspOrderInfo = data;
           this.montantcommande = data["montant"];
           this.shopUrl = data["shopUrl"];
           console.log("recupérer le shopUrl et le montant de la commande");
           
          },
          error: error => {
            this.library = error.error.text;
            console.log('There was an error!', error.error);
            console.log(error);
          }
        }
    );
 

      });
     
     console.log("dedans");
  
  }

  /**
   * Redirige vers le site du commerçant
   */
  annuler(){
    window.location.href = this.shopUrl;
    // this.router.navigate(this.selectedPspOrderInfo.get("shopUrl"));
  }

  getStripeSessionId(oid : string){
    this.pspService.getstripesessionid(oid).
    subscribe( {
      next: data => {
        this.striperesponse = redirect(data.body["session_id"]);
        console.log(this.striperesponse);
      //  console.log(data);
       
      },
      error: error => {
        this.library = error.error.text;
        console.log('There was an error!', error.error);
        console.log(error);
      }
    }
);
  
  }


  getCardCheckout(){
    this.activatedroute.queryParams.subscribe(params => {
      const oid = params['oid'];
      this.oid = oid;

      console.log("oid 2: " + oid );
/* 
      this.token = params.headers.get('token');
      if( this.token != null){
        localStorage.setItem("token", this.token );

      }
     */
    });
    this.pspService.setPaymentMethod(this.selectedPsp, this.oid ).
    subscribe(
     

        {
          next: data => {
            this.oid = data.oid;
            switch (this.selectedPsp) {
              case 1:
              // le cas de CMI
              console.log("1");
                this.sendData(data);
                break;
            
              default:
              // le cas de stripe
              this.getStripeSessionId(this.oid);
                break;
            } // Send data to CMI
           
          },
          error: error => {
            this.library = error.error.text;
            console.log('There was an error!', error.error.text);
            console.log(error);
          }
        }
    );
      }


  ngOnDestroy() {
    // this.sub.unsubscribe();
  }


sendData(data: any){
     console.log(data);
  console.log("2");
    var mapForm = document.createElement("form");
    mapForm.target = "_self";
    //mapForm.name = "pay_form";
    mapForm.method = "POST"; // or "post" if appropriate
    console.log("3");
    mapForm.action = data.pspurl;
  
    console.log("4");
    var keys = Object.keys(data);
    console.log(keys);
    // ajout des champs input à partir des données reçues du backend
    keys.forEach(element => {
      // nous n'enverons pas le paramètre pspurl au CMI
      if(element != "pspurl" && element !="session_id"){
      var mapInputd = document.createElement("input");
      mapInputd.type = "hidden";
      mapInputd.name = element.trim();
      mapInputd.value = data[element];
      mapForm.appendChild(mapInputd);
      console.log(element.trim() +" ; " + data[element])
    }
    });

    document.body.appendChild(mapForm);
   

     mapForm.submit();
  
  } 


 
}
