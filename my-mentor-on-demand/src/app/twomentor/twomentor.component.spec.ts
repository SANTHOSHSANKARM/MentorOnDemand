import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwomentorComponent } from './twomentor.component';

describe('TwomentorComponent', () => {
  let component: TwomentorComponent;
  let fixture: ComponentFixture<TwomentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwomentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwomentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
