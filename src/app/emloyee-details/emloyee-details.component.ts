import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee-list/Employee';

@Component({
  selector: 'app-emloyee-details',
  templateUrl: './emloyee-details.component.html',
  styleUrls: ['./emloyee-details.component.css']
})
export class EmloyeeDetailsComponent implements OnInit {

  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
