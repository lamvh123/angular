import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<div>
  {{name}}
  </div>
  <input #myinput type="text"/>
  <button (click)="onclick2(myinput.value)"><click</button>
  {{greeting}}
  <input [(ngModel)]="name" type="text">
  {{name}}
  asd{{parentData}}
  <button (click)="fireevent()"><click</button>
  
  `,
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  public name = "Vishward"
  public greeting ="";
  @Input('parentData') public parentData;
  constructor() { }
 
  ngOnInit() {
  }
  greetUser(){
    return "hello" + this.name;
  }
  onclick(){
    this.greeting ="hrrlo";
  }
  onclick2(myinput){
    this.greeting =myinput;
  }
  @Output() public childEvent = new EventEmitter();
  fireevent(){
    this.childEvent.emit('2222');
  }
}
