import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
import { Technology} from './tech';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {

  techForm:FormGroup;
  submitted=false;
  technology: Technology = new Technology();

  constructor(private formBuilder: FormBuilder, private router: Router,private userService : ValidationService) { }


  ngOnInit() {
    this.techForm = this.formBuilder.group({
      techName:['',[Validators.required,Validators.minLength(6)]],
      techPrerequisite:['',[Validators.required,Validators.minLength(6)]]
    });
  }

get f(){
  return this.techForm.controls;
}

onTechSubmit() {
  
  // this.user = new User();
  this.technology.technologyName = this.techForm.get('techName').value;
  this.technology.prerequisite = this.techForm.get('techPrerequisite').value;
  this.userService.createTechnology(this.technology).subscribe(data => 
    {
    console.log(data);
    this.router.navigate(['admintechnology']);
  }, error => console.log(error));
  
  if(this.techForm.invalid){
     return;
   }
  }

}
