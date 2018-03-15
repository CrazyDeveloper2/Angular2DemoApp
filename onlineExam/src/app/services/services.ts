import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {Student}  from '../models/Student.model';
import {Observable} from 'rxjs/RX';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService{
    private BASE_URL:string = 'http://localhost:4600/api';
    private BASE_URL_addEmployee:string = 'http://localhost:4600/addEmployee';

    constructor(private http:Http){}
    
    //place holders for last ID
    lastID:number =0;
    Students:Student[] = [];
    //add Students methods 
     addStudent(Student:Student):StudentService{
         if(!Student.StudentID)
           Student.StudentID=++this.lastID;
         this.Students.push(Student);

        //  //for calling the api
        //  let Option=new RequestOptions({
        //     headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
        //  });
        //  let headers:Headers = new Headers();
        //  headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //  headers.append('Cache-Control', 'no-cache');
        //  headers.append('Pragma','no-cache');
         
        //  return this.http.post(this.BASE_URL_addEmployee,Student, headers)
		// //return this.http.post(`${this.BASE_URL_addEmployee}`,JSON.stringify(body), options)
		// 	.toPromise()
        //     .then(this.extractData)  
        ////for calling api end
        return this;  
     }

     deleteStudentsByID(id:number):StudentService{
         this.Students = this.Students
                        .filter(Student=>Student.StudentID!==id);
         return this;                
     }

     updateStudentByID(id:number,values:Object={}):Student{
         let student=this.getStudentByID(id);
         if(!student){
             return null;
         }
         Object.assign(student,values);
         return student;
     }

     getAllStudents():Student[]{
         return this.Students;
     }
     getStudentByID(id:number):Student{
       return this.Students.filter(Student=>Student.StudentID==id).pop();
     }
     
     // this method is only to extract data from the response 
     private extractData(res: Response)
    {
        let body = res;

        return body || {};
    }
     
}
