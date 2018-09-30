import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { AddressDetails } from '../userData';

//import for toastr
import { ToastrService } from 'ngx-toastr';

//import for Routing
import {Router } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  public address;
  constructor(
    public appService:AppService,
    public toastr: ToastrService,
    public router: Router,

    ) { }

  ngOnInit() {
    this.getAddressDetailsFunction()
  }

  public setAddressDetailsFunction() {

    let addressDetails : AddressDetails = {
      address:this.address
    }

    //console.log(addressDetails);
    this.appService.setAddressDetails(addressDetails);

    this.toastr.success("Thanks for your Address Details", "Data Saved!");

    setTimeout(() => {
      this.router.navigate(['/user/view-details']);
    }, 1000);//redirecting to hobbies page

  }//end setAddressDetailsFunction


  public getAddressDetailsFunction() {
      let addressDetails = this.appService.getAddressDetails();

      this.address = addressDetails.address

    //console.log(this.address);
  }//end getAddressDetailsFunction

}
