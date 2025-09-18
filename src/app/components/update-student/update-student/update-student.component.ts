import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  formG!:FormGroup
  successStatus:boolean = false;
  constructor(private fb:FormBuilder,private serviceCall:NetworkCallServiceService){
    
  }
  ngOnInit(): void {
    this.formG = this.fb.group({
      name:["",[Validators.required,Validators.minLength(8)]],
      dob:["",[Validators.required,Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]]
    })
  }

  dateValidCheck(val:AbstractControl):ValidationErrors | null{
    const dateCheck = /^\d{4}-\d{2}-d{2}$/;
    if(dateCheck.test(val.value)){
      return {retVal:true};
    }
    return null;
  }

  updateInfo(){
    if(this.formG.valid){
      this.serviceCall.addStudents(this.formG.value).subscribe((data)=>{
        console.log(data);
        alert("Success!");
        this.successStatus=true;
        this.formG.reset();
      })
    }
  }
}
