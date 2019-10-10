import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor5Component } from './mentor5.component';

describe('Mentor5Component', () => {
  let component: Mentor5Component;
  let fixture: ComponentFixture<Mentor5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
