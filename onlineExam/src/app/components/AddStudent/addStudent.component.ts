import {StudentService} from './../../services/services';
import {Student} from './../../models/Student.model';
import {Component} from '@angular/core';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
import {homeComponent} from './../../components/home/home.component'
@Component({
  moduleId:module.id,
  selector:'addStudent',
  templateUrl:'addStudent.Components.html',
})

export class addStudentComponent{

     private timerSubscription: AnonymousSubscription;
    private postsSubscription: AnonymousSubscription;
     private home:homeComponent;
    public constructor(private studentService:StudentService,private _router:Router){}

    private Student:Student=new Student(0,'','');

    public addStudent(){
        var userModel=this.Student;
        var data=this.studentService.addStudent(userModel);
        new homeComponent(this.studentService).StudentList.push(userModel)
        //this.home.StudentList.push(userModel)
        this._router.navigate(['/home']);
        
        console.log(data);
    }
    public resetAddStudent(){
        this.Student=new Student(0,'','');
    }
}