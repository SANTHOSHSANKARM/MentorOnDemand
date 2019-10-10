import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor4Component } from './mentor4.component';

describe('Mentor4Component', () => {
  let component: Mentor4Component;
  let fixture: ComponentFixture<Mentor4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
