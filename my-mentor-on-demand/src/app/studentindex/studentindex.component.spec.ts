import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentindexComponent } from './studentindex.component';

describe('StudentindexComponent', () => {
  let component: StudentindexComponent;
  let fixture: ComponentFixture<StudentindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
