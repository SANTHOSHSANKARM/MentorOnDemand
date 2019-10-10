import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    // { path : '' , redirectTo : '/homepage' , pathMatch : 'full' },
    { path : '' , component : HomepageComponent},
    { path : 'homepage' , component : HomepageComponent},
    { path : 'mentorlist', component : MentorlistComponent},
    { path : 'mentor1' , component : Mentor1Component},
    { path : 'mentor2' , component : Mentor2Component},
    { path : 'mentor3' , component : Mentor3Component},
    { path : 'mentor4' , component : Mentor4Component},
    { path : 'mentor5' , component : Mentor5Component},
    { path : 'mentor6' , component : Mentor6Component},
    { path : 'onementor' , component : OnementorComponent},
    { path : 'twomentor' , component : TwomentorComponent},
    { path : 'threementor' , component : ThreementorComponent},
    { path : 'fourmentor' , component : FourmentorComponent},
    { path : 'fivementor' , component : FivementorComponent},
    { path : 'sixmentor' , component : SixmentorComponent},
    { path : 'form1' , component : Form1Component },
    { path : 'form2' , component : Form2Component },
    { path : 'form3' , component : Form3Component },
    { path : 'form4' , component : Form4Component },
    { path : 'form5' , component : Form5Component },
    { path : 'form6' , component : Form6Component },
    { path : 'signin' , component : HomepageComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'login' , component : LoginComponent },
    { path : 'pay' , component : Pay1Component},
    { path : 'adminsignin' , component : AdminsigninComponent},
    { path : 'success' , component : SuccesspayComponent },
    { path : 'admintechnology' , component : AdmintechnologyComponent},
    { path : 'studentindex' , component : StudentindexComponent},
    { path : 'studentcurrent' , component : StudentcurrentComponent},
    { path : 'studentcomplete' , component : StudentcompleteComponent},
    { path : 'payconfirm' , component : PayconfirmComponent},
    { path : 'addtechnology' , component : AddtechnologyComponent},
    { path : 'menprofile' , component : MentorprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
