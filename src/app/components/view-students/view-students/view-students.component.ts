import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/models/student';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {
  data$:Observable<any>=of([]);
  finalData$:Observable<any>=of([]);
  constructor(private ar:ActivatedRoute,private serviceCall:NetworkCallServiceService){}
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.data$=this.serviceCall.viewStudent();
    this.finalData$=this.data$;
  }
}
