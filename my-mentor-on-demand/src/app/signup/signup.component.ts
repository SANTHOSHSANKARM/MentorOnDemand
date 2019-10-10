import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
import { user, Mentor} from './user';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userLogInForm:FormGroup;
  mentorLogInForm:FormGroup;
  submitted=false;
  user: user = new user();
  mentor: Mentor = new Mentor();

  constructor(private formBuilder: FormBuilder, private router: Router,private userService : ValidationService) { }

  ngOnInit() {
    this.userLogInForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    this.mentorLogInForm = this.formBuilder.group({  
      memail:['',[Validators.required,Validators.email]],
      mpassword:['',[Validators.required,Validators.minLength(6)]],
      knowntechnology:['',[Validators.required]],
      experience:['',[Validators.required]]
    });

    
    
  }
get f(){
  return this.userLogInForm.controls;
}
get g(){
  return this.mentorLogInForm.controls;
}
  onSignUp() {
  
    // this.user = new User();
    this.user.userName = this.userLogInForm.get('email').value;
    this.user.password = this.userLogInForm.get('password').value;
    this.userService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['signin']);
    if(this.userLogInForm.invalid){
       return;
     }
    }
    onMentorSignUp(){
     this.mentor.mentorName = this.mentorLogInForm.get('memail').value;
     this.mentor.password=this.mentorLogInForm.get('mpassword').value;
     this.mentor.knownCourse=this.mentorLogInForm.get('knowntechnology').value;
     this.mentor.experience=this.mentorLogInForm.get('experience').value;
     this.userService.createMentor(this.mentor).subscribe(data=>console.log(data),error=>console.log(error));
     this.router.navigate(['signin']);
     if(this.mentorLogInForm.invalid){
       return;
     }
     
  }

}
