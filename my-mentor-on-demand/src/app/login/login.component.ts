import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
import { user, Mentor} from '../signup/user';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mentorForm:FormGroup;
  submitted = false;
  email:string;
  password:string;
  mentorObj:Mentor[];
  admin:any;

  userForm:FormGroup;
  usersubmitted=false;
  useremail:string;
  userObj:user[];
  useradmin:any;

  constructor(private formBuilder: FormBuilder,private router:Router,private userservice:ValidationService,private studentservice:ValidationService) { }

  ngOnInit() {    
    this.mentorForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.userForm = this.formBuilder.group({
      useremail:['',[Validators.required,Validators.email]],
      userpassword:['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.mentorForm.controls; }
  get g() { return this.userForm.controls;}

  onSubmit(){

    console.log("hi");
    this.submitted=true;
    this.usersubmitted=true;
    if(this.mentorForm.invalid){
      return;
    }
    else{
      this.userservice.getMentorDetails(this.mentorForm.get('email').value).subscribe(data=>{
        this.admin=data;
  

        if(this.admin==null){
          alert("Invalid credentials 1");
        }
        else if(this.admin.password==this.mentorForm.get('password').value){
          // alert("valid");
          this.router.navigateByUrl('/homepage');
        }
        else{
          console.log(this.admin.email);
          alert("Invalid credentials 2");
        }
      })
    }
  }
  onUserSubmit(){
    console.log("hi trainee");
    this.usersubmitted=true;
    if(this.userForm.invalid){
      return;
    }
    else{
      this.studentservice.getUserDetails(this.userForm.get('useremail').value).subscribe(data=>{
        this.useradmin=data;

        if(this.useradmin==null){
          alert("Invalid credentials 1");
        }
        else if(this.useradmin.password==this.userForm.get('userpassword').value){
          this.router.navigateByUrl('/homepage');
        }
        else{
          console.log(this.useradmin.useremail);
          alert("invalid credentials 2");
        }
      })
    }
  }  

}
