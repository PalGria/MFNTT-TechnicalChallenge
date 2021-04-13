import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  readonly URL_API = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) {
  }
  getCountries(){
    return this.http.get(this.URL_API);
  }

}
