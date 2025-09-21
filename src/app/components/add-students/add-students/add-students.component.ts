import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NetworkCallServiceService } from 'src/app/services/network-call-service.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})

export class AddStudentsComponent implements OnInit {
  formG!:FormGroup
  successStatus:boolean = false;
  constructor(private fb:FormBuilder,private serviceCall:NetworkCallServiceService){
    
  }
  ngOnInit(): void {
    this.formG = this.fb.group({
      name:["",[Validators.required,Validators.minLength(5),Validators.maxLength(70)]],
      department:["",[Validators.required]],
      course:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      dob:["",[Validators.required,this.dateValidCheck]],
      phNo:["",[Validators.required,this.phoneNumberValidCheck]],
      location:["",[Validators.required]]
    })
  }

  phoneNumberValidCheck(cont:AbstractControl):ValidationErrors | null{
    const phNoCheck = /^\+91[\s-]?[6-9]\d{9}$/
    if(!phNoCheck.test(cont.value)){
      return {retVal:true};
    }
    return null;
  }

  // emailValidChech(cont:AbstractControl):ValidationErrors | null{
  //   const emailCheck = /^[a-zA-Z0-9]*@[a-zA-z].[a-z]{2-3}$/
  // }

  // nameValidCheck(cont:AbstractControl):ValidationErrors | null{
  //   const nameCheck = /^[0-8]$/
  //   if(!nameCheck.test(cont.value)){
  //     return {retVal:true};
  //   }
  //   return null;
  // }

  dateValidCheck(val:AbstractControl):ValidationErrors | null{
    const dateCheck = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateCheck.test(val.value)){
      return {retVal:true};
    }
    return null;
  }

  addInfo(){
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
