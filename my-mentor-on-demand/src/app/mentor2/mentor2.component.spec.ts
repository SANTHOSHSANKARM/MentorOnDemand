import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor2Component } from './mentor2.component';

describe('Mentor2Component', () => {
  let component: Mentor2Component;
  let fixture: ComponentFixture<Mentor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
