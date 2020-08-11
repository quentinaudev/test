export class User {
    
  
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    ipAddress: string;
    ipContinentName : string;
    ipCountryName : string;
    ipCity : string;
    //username: string;
    nomFiscal: string;
    nomEntreprise: string;
    numTva: string;
    adresse: string;
    adresse2: string;
    ville:string;
    region:string;
    pays: string;
    type: string;
    confirmPassword: string;
   

    
    constructor(email: string, firstName: string, lastName: string,  phone: string, password: string, ipAddress: string,
        ipContinentName : string,
        ipCountryName : string,
        ipCity : string,
        nomFiscal:string,nomEntreprise:string,
        numTva:string,adresse:string, adresse2:string, ville:string,region:string,pays:string,type:string,confirmPassword: string) {
this.email = email;
this.firstName = firstName;
this.lastName = lastName;
this.phone = phone;
this.password = password;
this.ipAddress = ipAddress;
this.ipContinentName= ipContinentName;
this.ipCountryName= ipCountryName;
this.ipCity= ipCity;
this.nomFiscal =nomFiscal;
this.nomEntreprise =nomEntreprise;
this.numTva =numTva;
this.adresse =adresse;
this.adresse2 =adresse2;
this.ville =ville;
this.region =region;
this.pays =pays;
this.type =type;
this.confirmPassword = confirmPassword;

}


}