import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceEmpUrl : string;
  //getEmpUrl : string;
  //updateEmpUrl : string;

  constructor(private http : HttpClient) {

    this.serviceEmpUrl = "http://localhost:3000/posts";
    //this.getEmpUrl = "http://localhost:3000/posts";
    //this.updateEmpUrl = "http://localhost:3000/posts";
   }

   addEmployee(emp : Employee) : Observable<Employee>{
      return this.http.post<Employee>(this.serviceEmpUrl, emp)
      
   }

   getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.serviceEmpUrl);

   }

   updateEmployee(emp : Employee):Observable<Employee>{
    return this.http.put<Employee>(this.serviceEmpUrl+'/'+emp.id, emp);
   }

  deleteEmployee(emp : Employee) : Observable<Employee>{
    return this.http.delete<Employee>(this.serviceEmpUrl+'/'+emp.id);
  }
}
