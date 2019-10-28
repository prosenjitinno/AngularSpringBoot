import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { error } from 'util';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employees =  this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      data =>
        {
          console.log(data);
          this.getAllEmployee();
        },error =>{
          console.error(error);
          
        }
    );
  }

}
