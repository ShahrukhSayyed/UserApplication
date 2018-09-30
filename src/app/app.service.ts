/* Core Modules */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserData , BasicDetails , HobbiesDetails, ChildDetails, AddressDetails} from './user/userData';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userData : UserData  = new UserData();

  constructor(
    private _http: HttpClient,
    ) { }
  

  public getBasicDetails: any = () => {

    let basicDetails : BasicDetails = {
      firstName:this.userData.firstName,
      lastName:this.userData.lastName,
      email: this.userData.email,
      countryCode: this.userData.countryCode,
      countryName: this.userData.countryName,
      gender: this.userData.gender,
      maritalStatus: this.userData.maritalStatus,  
      mobileNumber:this.userData.mobileNumber
    }

    return basicDetails

  } // end getBasicDetails


  public setBasicDetails: any = (data: BasicDetails) => {

      this.userData.firstName = data.firstName;
      this.userData.lastName = data.lastName;
      this.userData.email = data.email;
      this.userData.countryCode = data.countryCode;
      this.userData.countryName= data.countryName;
      this.userData.gender = data.gender;
      this.userData.maritalStatus = data.maritalStatus;
      this.userData.mobileNumber = data.mobileNumber;

      //console.log('Details are Set')
  } // end setBasicDetails


  public getHobbiesDetails: any = () => {

    let hobbiesDetails : HobbiesDetails = {
      hobbies:this.userData.hobbies
    }

    return hobbiesDetails;

  } // end getHobbiesDetails


  public setHobbiesDetails: any = (data:HobbiesDetails) => {

      this.userData.hobbies = data.hobbies
  } // end setHobbiesDetails


  public getChildDetails: any = () => {

    let childDetails : ChildDetails = {
      childrens:this.userData.childrens
    }

    return childDetails

  } // end getChildDetails
  
  public setChildDetails: any = (data:ChildDetails) => {

      this.userData.childrens = data.childrens 

  } // end setChildDetails


  public getAddressDetails: any = () => {

    let addressDetails : AddressDetails = {
      address:this.userData.address
    }

    return addressDetails

  } // end getAddressDetails

  public setAddressDetails: any = (data:AddressDetails) => {
      this.userData.address = data.address
  } // end setAddressDetails


  public getUserData: any = () => {

    return this.userData;

  } // end getUserData

  public resetUserData: any = () => {

    this.userData = new UserData();;

  } // end getUserData

  public getCountryNames(): Observable<any> {    
    return this._http.get("./../assets/countryNames.json");
  }//end getCountryNames

 
  public getCountryNumbers(): Observable<any> {
    return this._http.get("./../assets/countryPhoneCodes.json");    
  }//end getCountryNumbers

}
 