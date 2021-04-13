export class Contact {
    avatar: string;
    first_name: string;
    last_name: string;
    id: number;

    constructor(firstName, LastName, id, avatar) {
        this.first_name = firstName ? firstName : '';
        this.last_name = LastName ? LastName : '';
        this.id = id ? id : '';
        this.avatar = avatar ? avatar : '';
    }
}

