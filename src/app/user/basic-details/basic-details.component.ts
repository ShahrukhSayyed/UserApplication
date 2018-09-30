import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { AppService } from '../../app.service';
import { BasicDetails } from '../userData';

//import for toastr
import { ToastrService } from 'ngx-toastr';

//import for Routing
import {Router } from '@angular/router';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css'],

})
export class BasicDetailsComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  public allCountries: any;
  public countryCode: string;
  public countryName: string;
  public countries: any[] = [];
  public countryCodes: string[];
  public country: any;

  public firstName;
  public lastName;
  public selectedGender;
  public selectedmaritalStatus;
  public mobileNumber;

  genders: string[] = ['Male', 'Female'];
  maritalStatuses: string[] = ['Single', 'Married'];

  constructor(
    public appService: AppService,
    public toastr: ToastrService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.getCountries();
    this.getCountryCodes()
    this.getBasicDetailsFunction()
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  public onChangeOfCountry() {
    //console.log(this.country)
    this.countryCode = this.countryCodes[this.country];
    //this.countryName = this.allCountries[this.country];
    this.countryName = this.country
  }//end onChangeOfCountry

  public getCountries() {
    this.appService.getCountryNames()
      .subscribe((data) => {
        this.allCountries = data;
        for (let i in data) {

          let singleCountry = {
            name: data[i],
            code: i
          }
          this.countries.push(singleCountry);
        }
        this.countries = this.countries.sort((first, second) => {
          return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : (first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0);
        });//end sort
      })//end subscribe

  }//end getCountries

  public getCountryCodes() {
    this.appService.getCountryNumbers()
      .subscribe((data) => {
        this.countryCodes = data;
      })//end subscribe
  }//end getCountriesCodes

  public setBasicDetailsFunction() {
    if (!this.firstName) {
      this.toastr.warning("First Name is required", "Warning!");
    }
    else if (!this.lastName) {
      this.toastr.warning("Last Name is required", "Warning!");
    }
    else if (!this.email.value) {
      this.toastr.warning("Email is required", "Warning!");
    }
    else if (!this.country) {
      this.toastr.warning("Country is required", "Warning!");
    }
    else if (!this.mobileNumber) {
      this.toastr.warning("Mobile Number is required", "Warning!");
    }
    else if (!this.selectedGender) {
      this.toastr.warning("Gender is required", "Warning!");
    }
    else if (!this.selectedmaritalStatus) {
      this.toastr.warning("Marital Status is required", "Warning!");
    }
    else {

      let basicDetails: BasicDetails = {
        firstName: this.firstName,
        lastName: this.lastName, 
        email: this.email.value,
        countryCode: this.countryCode,
        countryName: this.countryName,
        gender: this.selectedGender,
        maritalStatus: this.selectedmaritalStatus,
        mobileNumber: this.mobileNumber
      }

      //console.log(basicDetails);
      this.appService.setBasicDetails(basicDetails);

      this.toastr.success("Thanks for your Basic Details", "Data Saved!");

      setTimeout(() => {
        this.router.navigate(['/user/hobbies-details']);
      }, 1000);//redirecting to hobbies page

    }//end else
  }//end setBasicDetailsFunction

  public getBasicDetailsFunction() {


    let basicDetails = this.appService.getBasicDetails();

    this.firstName = basicDetails.firstName;
    this.lastName = basicDetails.lastName;
    this.email.setValue(basicDetails.email);
    this.countryCode = basicDetails.countryCode
    this.country = basicDetails.countryName
    this.selectedGender = basicDetails.gender
    this.selectedmaritalStatus = basicDetails.maritalStatus
    this.mobileNumber = basicDetails.mobileNumber


    //console.log(basicDetails);

  }//end setBasicDetailsFunction

}
