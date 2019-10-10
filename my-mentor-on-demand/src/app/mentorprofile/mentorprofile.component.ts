import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service.js';


export class MenDetails{
  UserName : string;
  Mobile: number ;
  Technology :string ;
  Experience : number;
  WorkingTime : number  ;
  LinkedURL : string;
  TrainingDelivered : string;
}

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})

export class MentorprofileComponent implements OnInit {
  mentor:MenDetails;
  
  constructor(userService:ValidationService) {
      userService.getMentor().subscribe((data:MenDetails)=>{
        this.mentor={
          Experience:data.Experience,
          LinkedURL:data.LinkedURL,
          Mobile:data.Mobile,
          Technology:data.Technology,
          TrainingDelivered:data.TrainingDelivered,
          UserName:data.UserName,
          WorkingTime:data.WorkingTime

        }
      });
   }

  ngOnInit() {
  }

}



