import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes} from '@angular/router'; 
import { HomeComponent } from './main/home/home.component'
import { ContactsComponent } from './main/contacts/contacts.component'
import { DetailComponent } from './main/detail/detail.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'detail', component: DetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
