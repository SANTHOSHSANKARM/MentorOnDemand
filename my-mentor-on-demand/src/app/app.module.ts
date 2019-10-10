import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { Mentor1Component } from './mentor1/mentor1.component';
import { Mentor2Component } from './mentor2/mentor2.component';
import { Mentor3Component } from './mentor3/mentor3.component';
import { Mentor4Component } from './mentor4/mentor4.component';
import { Mentor5Component } from './mentor5/mentor5.component';
import { Mentor6Component } from './mentor6/mentor6.component';
import { OnementorComponent } from './onementor/onementor.component';
import { TwomentorComponent } from './twomentor/twomentor.component';
import { ThreementorComponent } from './threementor/threementor.component';
import { FourmentorComponent } from './fourmentor/fourmentor.component';
import { FivementorComponent } from './fivementor/fivementor.component';
import { SixmentorComponent } from './sixmentor/sixmentor.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Pay1Component } from './pay1/pay1.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { SuccesspayComponent } from './successpay/successpay.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { StudentindexComponent } from './studentindex/studentindex.component';
import { StudentcurrentComponent } from './studentcurrent/studentcurrent.component';
import { StudentcompleteComponent } from './studentcomplete/studentcomplete.component';
import { PayconfirmComponent } from './payconfirm/payconfirm.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MentorlistComponent,
    Mentor1Component,
    Mentor2Component,
    Mentor3Component,
    Mentor4Component,
    Mentor5Component,
    Mentor6Component,
    OnementorComponent,
    TwomentorComponent,
    ThreementorComponent,
    FourmentorComponent,
    FivementorComponent,
    SixmentorComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    SignupComponent,
    LoginComponent,
    Pay1Component,
    AdminsigninComponent,
    SuccesspayComponent,
    AdmintechnologyComponent,
    StudentindexComponent,
    StudentcurrentComponent,
    StudentcompleteComponent,
    PayconfirmComponent,
    AddtechnologyComponent,
    MentorprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
