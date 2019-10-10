import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor3Component } from './mentor3.component';

describe('Mentor3Component', () => {
  let component: Mentor3Component;
  let fixture: ComponentFixture<Mentor3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
