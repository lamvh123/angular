import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeChildService {

  constructor() { }
  getEmployees(){
    return [{"id":1,"name":"lam"},{"id":2,"name":"lam2"}];
  }
}
