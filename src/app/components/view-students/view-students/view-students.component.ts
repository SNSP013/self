import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Student } from 'src/app/models/student';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {
  data$:Observable<Student[]>=of([]);
  finalData$:Observable<Student[]>=of([]);
  idVal!:string;
  constructor(private ar:ActivatedRoute,private serviceCall:NetworkCallServiceService,private router:Router){}
  ngOnInit(): void {
    this.idVal = String(this.ar.snapshot.paramMap.get('id'));
    if(this.idVal){
      this.deleteInfo(this.idVal);
    }
    this.getData();
  }
  getData(){
    this.data$=this.serviceCall.viewStudent();
    this.finalData$=this.data$.pipe(map((val)=>val.sort((a:Student,b:Student)=>a.name.localeCompare(b.name))));
  }
  searchValue(e:any){
    const value = e.target.value;
    if(!value){
      this.finalData$=this.data$;
      return;
    }
    else{
      this.finalData$ = this.data$.pipe(
        map((val)=>{
          return val.filter(
            (s)=> s.name.toString().includes(value) || s.id.toString().includes(value)
          )
        })
      )
    }
  }

  deleteInfo(id:any){
    this.serviceCall.deleteById(id).subscribe(()=>{
      this.router.navigate(['/view'])
    })
  }

}
