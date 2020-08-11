export class Type {
    
  id:number
    name: string;
    montant: number;
    frais: number;
    tva: number;
    

    
    constructor(name: string, montant: number, frais: number,tva: number ) {
this.name = name;
this.montant = montant;
this.frais = frais;
this.tva = tva; 

}

}