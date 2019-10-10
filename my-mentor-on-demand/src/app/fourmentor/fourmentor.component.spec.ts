import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourmentorComponent } from './fourmentor.component';

describe('FourmentorComponent', () => {
  let component: FourmentorComponent;
  let fixture: ComponentFixture<FourmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
