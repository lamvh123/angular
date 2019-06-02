import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import {Config} from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private _employeeservice : EmployeesService) { }
  config:Config[];
  values = [
    {
      key:"key1",
      value:"value1"
    },
    {
      key:"key2",
      value:"value2"
    }
  ]
  showConfig() {
    this._employeeservice.getConfig()
      .subscribe((data: Config[]) => this.config = data
      );
  }
}
