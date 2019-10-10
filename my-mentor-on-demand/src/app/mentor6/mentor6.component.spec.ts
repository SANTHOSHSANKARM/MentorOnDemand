import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor6Component } from './mentor6.component';

describe('Mentor6Component', () => {
  let component: Mentor6Component;
  let fixture: ComponentFixture<Mentor6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
