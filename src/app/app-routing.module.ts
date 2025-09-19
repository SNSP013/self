import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students/add-students.component';
import { ViewStudentsComponent } from './components/view-students/view-students/view-students.component';
import { ViewByIdComponent } from './components/view-by-id/view-by-id/view-by-id.component';
import { UpdateStudentComponent } from './components/update-student/update-student/update-student.component';

const routes: Routes = [
  {path:'',redirectTo:'addStudent',pathMatch:'full'},
  {path:'view',component:ViewStudentsComponent},
  {path:'viewById/:id',component:ViewByIdComponent},
  {path:'view/:id',component:ViewStudentsComponent},
  {path:'addStudent',component:AddStudentsComponent},
  {path:'update/:id',component:UpdateStudentComponent},
  {path:'delete/:id',component:ViewStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
