import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../shared/services/contact.service'
import { AddressService } from '../shared/services/address.service'
import { Contact } from '../shared/models/contact.model'
import { Address } from '../shared/models/address.model'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  contact: Contact = new Contact('', '', '', '');
  addresses: Address[];
  contactId: number;
  constructor(
    private router: Router,
    private dataRoute: ActivatedRoute,
    public contactService: ContactService,
    public addressService: AddressService,
  ) {

  }
  getContact(id) {
    this.contactService.getContact(id)
      .subscribe(res => {
        this.contact = res as Contact;
        this.getAddresses();
        console.log(res);
      })

    //TODO GET ADDRESSES 
  }
  getAddresses() {
    this.addressService.getAdresssesByContact(this.contact.id)
      .subscribe(res => {
        this.addresses = res as Address[];
        console.log(res);
      })
  }

  ngOnInit(): void {
    console.log(this.dataRoute.snapshot.paramMap.get('id'));
    this.getContact(this.dataRoute.snapshot.paramMap.get('id'));

  }
  goBack() {
    this.router.navigate(['/contacts']);
  }
}
