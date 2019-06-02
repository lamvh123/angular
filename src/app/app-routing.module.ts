import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigcomponentComponent } from './configcomponent/configcomponent.component';
const routes: Routes = [
  {path:'departments',component:ConfigcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ConfigcomponentComponent]
