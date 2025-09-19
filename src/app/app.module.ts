import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student } from 'src/app/models/student';
import { AddStudentsComponent } from './components/add-students/add-students/add-students.component';
import { ViewStudentsComponent } from './components/view-students/view-students/view-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewByIdComponent } from './components/view-by-id/view-by-id/view-by-id.component';
import { UpdateStudentComponent } from './components/update-student/update-student/update-student.component';
import { RouterEvent, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ViewStudentsComponent,
    ViewByIdComponent,
    UpdateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
