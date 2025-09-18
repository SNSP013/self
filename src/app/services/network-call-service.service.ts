import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkCallServiceService {
  apiUrl:string = "https://ec2-65-0-31-215.projects.wecreateproblems.com/proxy/8000/students"
  constructor(private http:HttpClient) { }

  addStudents(stud:Student):Observable<any>{
    return this.http.post(this.apiUrl,stud);
  }

  viewStudent():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  
  viewById(id:any):Observable<any>{
    return this.http.get(this.apiUrl+"/"+id);
  }

  updateStudent(id:any,stud:Student):Observable<any>{
    return this.http.post(this.apiUrl+"/"+id,stud);
  }
}