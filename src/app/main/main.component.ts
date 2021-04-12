import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav = (drawer) =>{
    drawer.toggle(); 
  }
}
