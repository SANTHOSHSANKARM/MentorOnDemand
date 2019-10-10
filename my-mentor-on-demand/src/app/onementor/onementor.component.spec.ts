import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnementorComponent } from './onementor.component';

describe('OnementorComponent', () => {
  let component: OnementorComponent;
  let fixture: ComponentFixture<OnementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
