import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ChildDetails } from '../userData';


//import for toastr
import { ToastrService } from 'ngx-toastr';

//import for Routing
import {Router } from '@angular/router';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
  public childrens = [
    {code : '1' , value:'Son'},
    {code : '2' , value:'Daughter'},

  ];
  textboxArray: Array<any> = [
  ];

  newAttribute: any = {};
  public children;
  
  constructor(
    public appService:AppService,
    public toastr: ToastrService,
    public router: Router,

    ) { }

  ngOnInit() {
    this.getChildDetailsFunction()
  }

  addFieldValue(value) {
    this.newAttribute = {
      relation:value,
      name:''
    }

    if (this.textboxArray.length >= 0) {
      this.textboxArray.push(this.newAttribute);
      //console.log(this.newAttribute)
    } else {

    }
  }
  
  deleteFieldValue(index) {
    this.textboxArray.splice(index, 1);
  }

  public setChildDetailsFunction() {

    let childDetails : ChildDetails = {
      childrens:this.textboxArray
    }

    //console.log(childDetails);
    this.appService.setChildDetails(childDetails);

    this.toastr.success("Thanks for Your Child Details", "Data Saved!");

    setTimeout(() => {
      this.router.navigate(['/user/address-details']);
    }, 1000);//redirecting to child page

  }//end setChildDetailsFunction


  public getChildDetailsFunction() {
      let childDetails = this.appService.getChildDetails();

      //console.log(childDetails.childrens.length);

      if(childDetails.childrens.length > 0)
        this.textboxArray = childDetails.childrens

    //console.log(this.textboxArray);
  }//end getChildDetailsFunction

}
