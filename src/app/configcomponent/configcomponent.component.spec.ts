import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigcomponentComponent } from './configcomponent.component';

describe('ConfigcomponentComponent', () => {
  let component: ConfigcomponentComponent;
  let fixture: ComponentFixture<ConfigcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
