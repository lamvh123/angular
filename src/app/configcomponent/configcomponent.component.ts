import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import {Config} from '../config';
@Component({
  selector: 'app-configcomponent',
  template: `
  <input [(ngModel)]="config.heroesUrl" type="text"/>
  `,
  styleUrls: ['./configcomponent.component.sass']
})
export class ConfigcomponentComponent implements OnInit {

  constructor(private _employeeservice : EmployeesService) { }
  config;
  ngOnInit() {
  }
  showConfig() {
    this._employeeservice.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }

}

