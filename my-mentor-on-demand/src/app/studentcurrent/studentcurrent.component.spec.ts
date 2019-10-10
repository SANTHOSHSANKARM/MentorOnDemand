import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcurrentComponent } from './studentcurrent.component';

describe('StudentcurrentComponent', () => {
  let component: StudentcurrentComponent;
  let fixture: ComponentFixture<StudentcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
