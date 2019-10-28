import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/Employee';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  submitted : boolean = false;
  
  constructor(
    private employeeService: EmployeeService,
  ) { }
  
  
  ngOnInit() {
  }

  newEmployee(): void{
    this.submitted = false;
    this.employee = new Employee();
  }

  save(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data =>{
        console.log(data);
        
      },error =>{
        console.error(error);
        
      }
    );
    this.employee = new Employee();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
