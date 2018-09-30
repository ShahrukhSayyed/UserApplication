/* Modules */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


/* modules from Materialize */

import {MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule,MatRadioModule,MatButtonModule,MatCheckboxModule,MatTooltipModule  } from '@angular/material';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';

/* Components */

import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { HobbiesDetailsComponent } from './hobbies-details/hobbies-details.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AppService } from '../app.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],


  declarations: [BasicDetailsComponent, HobbiesDetailsComponent, ChildDetailsComponent, AddressDetailsComponent, ViewDetailsComponent],

  providers:[AppService]
})
export class UserModule { }
