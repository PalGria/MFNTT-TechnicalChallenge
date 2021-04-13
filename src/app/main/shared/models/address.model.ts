export class Address {
    street1: string;
    street2: string;
    town: string;
    country: string;

    constructor(street1, street2, town, country) {
        this.street1 = street1 ? street1 : '';
        this.street2 = street2 ? street2 : '';
        this.town = town ? town : '';
        this.country = country ? country : '';
    }
}

