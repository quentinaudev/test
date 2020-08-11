import { Type } from '../model/type';
import { Former } from './former';
export class Event { 
    name: string;
    description: string;
    shortDescription: string;
    dateEvent: string;
    eventTime: string;
    types: Type[]; 
    donation: number;
    destinationDonation : string;
    former: Former;
    durationEvent: string;
    certification: boolean;

    constructor(name: string, description: string,shortDescription: string, dateEvent: string, eventTime: string, types: Type[],donation: number,destinationDonation:string, former: Former, durationEvent: string ,certification: boolean) {
this.name = name;
this.description = description;
this.shortDescription=shortDescription;
this.dateEvent = dateEvent;
this.eventTime = eventTime;
this.types = types;
this.donation=donation;
this.destinationDonation = destinationDonation
this.former = former;
this.durationEvent= durationEvent;
this.certification= certification;
}

}