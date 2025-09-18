import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit {
  stud$!:any;
  constructor(private serviceCall:NetworkCallServiceService,private ar:ActivatedRoute){}
  ngOnInit(): void {
    this.ar.params.subscribe((data)=>{
      const id=data['id'];
      console.log(id);
      alert("Success");
      this.getStudentById(id);
    })
    }
    getStudentById(id:any){
      this.serviceCall.viewById(id).subscribe((data)=>{
        this.stud$=data;
      })
  }
}
