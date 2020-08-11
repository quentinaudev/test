import { Type } from '../model/type';
export class MyChargeCMI {
   
    amount: string;
    frais: number;
    tva: number;
    events: Event;
    donation: number;
    type: Type[];
    nombre: number;

    constructor(amount: string, frais: number, tva: number,events: Event, donation:number, type: Type[],nombre: number) {
        this.amount = amount;
        this.frais = frais;
        this.tva = tva;
        this.events = events;
        this.donation = donation;
        this.type = type;
        this.nombre= nombre;
        }
      
}