import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  readonly URL_API = 'http://localhost:3000/addresses';

  constructor(private http: HttpClient) {
  }
  getAdresssesByContact(id){
    return this.http.get(this.URL_API+ `?contactId=${id}`);
  }
  getAdress(id){
    return this.http.get(this.URL_API + `/adress/${id}`);
  }
  addAdress(adress){
    return this.http.post(this.URL_API, adress);
  }
  editAdress(adress){
    return this.http.put(this.URL_API + `/${adress.id_adress}`, adress);
  }
  deleteAdress(id){
    return this.http.delete(this.URL_API + `/${id}`);
  }

  
}
