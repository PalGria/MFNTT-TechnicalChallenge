import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  callParent(): void {
    this.toggleSideNav.next('somePhone');
  }
}
