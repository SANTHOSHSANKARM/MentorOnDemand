import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcompleteComponent } from './studentcomplete.component';

describe('StudentcompleteComponent', () => {
  let component: StudentcompleteComponent;
  let fixture: ComponentFixture<StudentcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
