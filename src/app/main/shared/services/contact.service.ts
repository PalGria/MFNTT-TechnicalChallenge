import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly URL_API = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {
  }
  getContacts(){
    return this.http.get(this.URL_API);
  }
  getContact(id){
    return this.http.get(this.URL_API + `/${id}`);
  }
  addContact(Contact){
    return this.http.post(this.URL_API, Contact);
  }
}
