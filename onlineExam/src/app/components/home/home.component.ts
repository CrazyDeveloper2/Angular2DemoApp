import {StudentService} from './../../services/services';
import { Component } from '@angular/core'; 
import {Response} from '@angular/http';
import {Student} from './../../models/Student.model';
@Component({
   moduleId:module.id,
   selector:'home',
   templateUrl:'home.Component.html'
})

export class homeComponent{
    public StudentList:Student[]= [
        new Student(1,"mr Nick1","CSE"),
        new Student(2,"mr Nick2","CSE1"),
    ];
  

    constructor(private StudentService:StudentService){
     //this.StudentList=this.StudentService.getAllStudents();
    }

}