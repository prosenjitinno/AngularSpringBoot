import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employee/";
  constructor(private http: HttpClient) { }

  getEmployeeList() : Observable<any>{
    return this.http.get(`${this.baseUrl}/getAll`);
  }
  
  getEmployee(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}'/getById/'${id}`);
  }

  createEmployee(employee: Object) : Observable<any>{
    return this.http.post(`${this.baseUrl}/create`, employee);
  }

  updateEmployee(id: number, employee: Object) : Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`, employee);
  }

  deleteEmployee(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }
}
