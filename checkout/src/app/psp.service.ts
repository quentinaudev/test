import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class PspService {
   
  private BASE_URL = window["cfgApiBaseUrl"];
   

  private host = this.BASE_URL;
  constructor(private http: HttpClient) { }

  getSelectPspOrderInfo(tempOid: String){
    return this.http.post<any>(this.host+"/getSelectPspOrderInfo?oid="+tempOid,{observe:'response'});

  }

  setPaymentMethod(id: any, oid: string) {
    if(oid == null){
      console.log("commande non definiey");
    }
    return this.http.post<any>(
      this.host+"/getCardCheckout?idpsp="+id +"&oid=" + oid,
      {
        
        observe:'response'
        
       }
      );
  }


  sendOrderToChoosenPSP(){
    // envoyer les informations au PSP choisi
    // monter un formulaire pour envoyer les données avec la méthode POST
  }

  getstripesessionid(oid: string){
    return this.http.get(this.host+"/stripeid?oid="+oid,{headers: new HttpHeaders({  }),observe:'response'});
  }
  
  getAllPsp(){
    return this.http.get(this.host+"/PspCmi/findAll",{headers: new HttpHeaders({  }),observe:'response'});
    }

}
