import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreementorComponent } from './threementor.component';

describe('ThreementorComponent', () => {
  let component: ThreementorComponent;
  let fixture: ComponentFixture<ThreementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
