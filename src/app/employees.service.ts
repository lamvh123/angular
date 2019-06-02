import { Injectable } from '@angular/core';
import { EmployeeChildService } from './employee-child.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EmployeesService {

  constructor(private _employeeChild:EmployeeChildService,private http: HttpClient) { }
  getEmployees(){
    return this._employeeChild.getEmployees();
  }
  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
