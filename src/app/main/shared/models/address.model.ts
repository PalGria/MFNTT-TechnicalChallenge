export class Address {
    street1: string;
    street2: string;
    town: string;
    country: string;
    contactId: number;
    id: string;

    constructor(street1,  town, country, street2 ?, contactId ?, id ? ) {
        this.street1 = street1 ? street1 : '';
        this.street2 = street2 ? street2 : '';
        this.town = town ? town : '';
        this.country = country ? country : '';
        this.contactId =contactId ? contactId : '';
        this.id =  id ? id : '';
  
    }
}

