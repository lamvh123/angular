import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesService } from './employees.service';
import { EmployeeChildService } from './employee-child.service';
import { ConfigcomponentComponent } from './configcomponent/configcomponent.component';
import {Config} from './config';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    ConfigcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeesService,EmployeeChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
