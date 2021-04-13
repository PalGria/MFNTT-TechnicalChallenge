import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../shared/services/contact.service'
import { Contact } from '../shared/models/contact.model'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  name: string = '';

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    public contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts() {
    this.contactService.getContacts()
      .subscribe(res => {
        this.contacts = res as Contact[];

        console.log(res);
      })
  }
  addContact() {
    if (this.name) {
      let name = this.name.split(" ")[0];
      let surname = this.name.slice(name.length + 1 , this.name.length);
      let contact: Contact =
      {
        "avatar": "https://i.imgur.com/tdi3NGa.png",
        "first_name": name,
        "last_name": surname,
        "id": this.contacts.length + 1
      };
      console.log(this.contacts); //TODO REMOVE

      this.contactService.addContact(contact).subscribe(res => {
        this.getContacts(); 
      });

      //this.contacts.push(contact);
    }
    else {
      this.openSnackBar();
    }
  }
  goDetail(contact) {

    console.log("navigate to detail?");
    this.router.navigate(['/detail', { id: contact.id }]);
  }

  openSnackBar() {
    this._snackBar.open('Something went wrong. Try again.', '', { duration: 2000, panelClass: ['mat-toolbar', 'mat-warn'] });

  }

}
