import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee',
  template: `
   <h2></h2>
   <ul *ngFor="let employee of employees">
   <li>{{employee.name}}</li>
   </ul>

  `,
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  public employees = []
  constructor(private _employeeservice : EmployeesService) { }

  ngOnInit() {
    this.employees = this._employeeservice.getEmployees();
  }

}
