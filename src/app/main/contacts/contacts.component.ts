import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = {
    "contacts": [
      {
        "id": 1,
        "first_name": "Aloy",
        "last_name": "Sobeck",
        "avatar": "https://pbs.twimg.com/profile_images/862284388012367872/sBzixGdN.jpg"
      },
      {
        "id": 2,
        "first_name": "Edward",
        "last_name": "Kenway",
        "avatar": "https://pbs.twimg.com/profile_images/490623209822105600/1JHdK9lS.jpeg"
      },
      {
        "id": 3,
        "first_name": "Nathan",
        "last_name": "Drake",
        "avatar": "https://pbs.twimg.com/profile_images/630503477748195328/GWKlmRm-.jpg"
      },
      {
        "avatar": "https://handmade.network/static/light/empty-avatar.svg",
        "first_name": "John",
        "last_name": "Doe",
        "id": 4
      }
    ],
    "addresses": [
      {
        "street1": "Queen Anne's",
        "street2": "Bloomsbury",
        "town": "London",
        "country": "GB",
        "contactId": "2",
        "id": 1
      }
    ],
    "countries": [
      {
        "iso2": "DE",
        "name": "Germany"
      },
      {
        "iso2": "AT",
        "name": "Austria"
      },
      {
        "iso2": "CH",
        "name": "Switzerland"
      },
      {
        "iso2": "NL",
        "name": "Netherlands"
      },
      {
        "iso2": "GB",
        "name": "United Kingdom"
      },
      {
        "iso2": "BE",
        "name": "Belgium"
      },
      {
        "iso2": "CZ",
        "name": "Czech Republic"
      },
      {
        "iso2": "HU",
        "name": "Hungary"
      },
      {
        "iso2": "SI",
        "name": "Slovenia"
      },
      {
        "iso2": "FR",
        "name": "France"
      },
      {
        "iso2": "IT",
        "name": "Italy"
      },
      {
        "iso2": "PL",
        "name": "Poland"
      },
      {
        "iso2": "ES",
        "name": "Spain"
      }
    ]
  };
  name: string = '';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addContact() {
    if (this.name) {
      let name = this.name.split(" ")[0];
      let surname = this.name.slice(0, this.name.length);
      let contact =
      {
        "avatar": "https://i.imgur.com/tdi3NGa.png",
        "first_name": name[0],
        "last_name": surname,
        "id": 4
      };
      console.log(this.contacts.contacts);



      this.contacts.contacts.push(contact);
    }
    else {
      this.openSnackBar();
    }
  }
  openSnackBar() {
    this._snackBar.open('Something went wrong. Try again.', '',{ duration:  2000, panelClass: ['mat-toolbar', 'mat-warn'] });

  }
}