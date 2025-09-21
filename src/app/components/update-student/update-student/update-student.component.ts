import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  formG!:FormGroup
  successStatus:boolean = false;
  idValues!:string;
  constructor(private fb:FormBuilder,private serviceCall:NetworkCallServiceService,private ar:ActivatedRoute,private router:Router){
    
  }
  ngOnInit(): void {
    this.idValues = String(this.ar.snapshot.paramMap.get('id'));
    if(this.idValues){
      this.serviceCall.viewById(this.idValues).subscribe((data)=>{
        this.formG.patchValue(data);
      })
    }
    alert(this.idValues);
    this.formG = this.fb.group({
      name:["",[Validators.required,Validators.minLength(5),Validators.maxLength(70)]],
      dob:["",[Validators.required,this.dateValidCheck]],
      phNo:["",[Validators.required,this.phoneNumberValidCheck]]
    })
  }

  phoneNumberValidCheck(cont:AbstractControl):ValidationErrors | null{
    const phNoCheck = /^[6-9]\d{9}$/
    if(!phNoCheck.test(cont.value)){
      return {retVal:true};
    }
    return null;
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
      this.serviceCall.updateStudent(this.idValues,this.formG.value).subscribe((data)=>{
        alert("Updated Successfully!");
        this.router.navigate(['/view'])
      })
    }
  }
}
