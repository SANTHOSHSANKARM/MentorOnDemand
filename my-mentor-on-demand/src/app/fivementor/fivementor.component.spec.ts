import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivementorComponent } from './fivementor.component';

describe('FivementorComponent', () => {
  let component: FivementorComponent;
  let fixture: ComponentFixture<FivementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
