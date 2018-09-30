
/* Core modules  */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';


/* import Components starts */

import { BasicDetailsComponent } from './user/basic-details/basic-details.component';
import { HobbiesDetailsComponent } from './user/hobbies-details/hobbies-details.component';
import { ChildDetailsComponent } from './user/child-details/child-details.component';
import { AddressDetailsComponent } from './user/address-details/address-details.component';
import { ViewDetailsComponent } from './user/view-details/view-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path :'user/basic-details',component:BasicDetailsComponent},
  {path :'user/hobbies-details',component:HobbiesDetailsComponent},
  {path :'user/child-details', component:ChildDetailsComponent},
  {path :'user/address-details', component:AddressDetailsComponent},
  {path :'user/view-details', component:ViewDetailsComponent},

  {path : '', redirectTo:'user/basic-details',pathMatch:'full'},
  {path :'*',component:PageNotFoundComponent},
  {path :'**',component:PageNotFoundComponent}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,

  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
