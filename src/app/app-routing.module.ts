import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students/add-students.component';
import { ViewStudentsComponent } from './components/view-students/view-students/view-students.component';

const routes: Routes = [
  {path:'',redirectTo:'addStudent',pathMatch:'full'},
  {path:'view',component:ViewStudentsComponent},
  {path:'addStudent',component:AddStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
