
//import from core modules

import { Component, OnInit, Input } from '@angular/core';

//import AppService
import { AppService } from '../../app.service';


//import for toastr
import { ToastrService } from 'ngx-toastr';

//import for Routing
import {Router } from '@angular/router';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  public userData;;

  constructor(
    /* Injecting services*/
    public appService: AppService,
    public toastr: ToastrService,
    public router: Router,

    ) { }

  ngOnInit() {
    this.getUserDataFunction() //calling getUserDataFunction
  }


  public getUserDataFunction() {
    this.userData = this.appService.getUserData();
  }//end getUserDataFunction


  public resetUserDataFunction() {
    this.appService.resetUserData();
    
    this.toastr.info("Data Resetted!");

    setTimeout(() => {
      this.router.navigate(['/user/basic-details']);
    }, 1000);//redirecting to basic page

  }//end resetUserDataFunction



}
