import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HobbiesDetails } from '../userData';

import { AppService } from '../../app.service';

//import for toastr
import { ToastrService } from 'ngx-toastr';

//import for Routing
import {Router } from '@angular/router';

@Component({
  selector: 'app-hobbies-details',
  templateUrl: './hobbies-details.component.html',
  styleUrls: ['./hobbies-details.component.css']
})
export class HobbiesDetailsComponent implements OnInit {
  public hobbies = new FormControl();
  public hobbiesList: string[] = ['Swimming', 'Dancing', 'Reading', 'Singing'];
  public enteredHobby:any;
  public other = false;
  public hobbiesSelected = []

  constructor(
    public appService:AppService,
    public toastr: ToastrService,
    public router: Router,

    ) { }

  ngOnInit() {
    this.getHobbiesDetailsFunction()
  }
 
  public addUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.
      if (this.enteredHobby != undefined && this.enteredHobby != '') {
        if (this.hobbiesList.indexOf(this.enteredHobby) === -1) {
          this.hobbiesList.push(this.enteredHobby)
          this.other = false;
          //this.hobbies.setValue(this.enteredHobby)
          //console.log(this.hobbies.value)

        }//end indexof if
      }//end undefined if
    }//end keycode if
 
  } // end addUsingKeypress
 
  public setHobbiesDetailsFunction() {
      let hobbiesDetails : HobbiesDetails = {
        hobbies :this.hobbies.value
      }
  
      //console.log(hobbiesDetails);
      this.appService.setHobbiesDetails(hobbiesDetails);

      this.toastr.success("Thanks for your Hobbies Details", "Data Saved!");

      setTimeout(() => {
        this.router.navigate(['/user/child-details']);
      }, 1000);//redirecting to child page
  
  }//end setHobbiesDetailsFunction

  public getHobbiesDetailsFunction() {
      let hobbiesDetails = this.appService.getHobbiesDetails();

      //console.log(hobbiesDetails.hobbies.length);

      if(hobbiesDetails.hobbies.length > 0)
        this.hobbies.setValue(hobbiesDetails.hobbies)

      //console.log(this.hobbies);
  }//end getHobbiesDetailsFunction

}
