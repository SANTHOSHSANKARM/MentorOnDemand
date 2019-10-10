import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user, Mentor} from './signup/user';
import { admin } from './adminsignin/admin';
import { Technology } from './addtechnology/tech';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public baseUrl = 'http://localhost:8761';

  constructor( private http:HttpClient) { }
  
  createUser(user:object):Observable<object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}` + '/user/user/signup',user);
  }
  createMentor(mentor:object):Observable<object>{
    console.log(mentor);
    return this.http.post(`${this.baseUrl}` + '/mentor/mentor/signup',mentor);
  }
  getMentorDetails(mentorName:String):Observable<object>{
    console.log(mentorName);
    return this.http.get<Mentor>(`${this.baseUrl}` + '/mentor/getMentor/'+mentorName);
  }
  
  getUserDetails(userName:String):Observable<user>{
    console.log(userName);
    return this.http.get<user>(`${this.baseUrl}` + '/user/getUser/'+userName);
  }

  getAdminDetails(email:String):Observable<admin>{
    console.log(email);
    return this.http.get<admin>(`${this.baseUrl}` + '/admin/getAdmin/'+email);
  }


  createTechnology(tech:object):Observable<object>{
    console.log(tech);
    return this.http.post(`${this.baseUrl}` + '/technology/technology/signup',tech);
  }

  getMentor():Observable<Object>{
    return this.http.get('/assets/mentorprofile.json');
  }

}
