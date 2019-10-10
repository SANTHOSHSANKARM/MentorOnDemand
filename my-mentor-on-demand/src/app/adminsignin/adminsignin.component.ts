import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
import { admin} from './admin';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})

export class AdminsigninComponent implements OnInit {

  adminForm:FormGroup;
  submitted = false;
  email:string;
  password:string;
  adminObj:admin[];
  admin:any;
  constructor(private formBuilder: FormBuilder,private router:Router,private adminservice:ValidationService,) { }

  ngOnInit() {    
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.adminForm.controls; }

  onAdminSubmit(){

    console.log("hi");
    this.submitted=true;
    this.submitted=true;
    if(this.adminForm.invalid){
      return;
    }
    else{
      this.adminservice.getAdminDetails(this.adminForm.get('email').value).subscribe(data=>{
        this.admin=data;
  

        if(this.admin==null){
          alert("Invalid credentials 1");
        }
        else if(this.admin.password==this.adminForm.get('password').value){
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
  
}

