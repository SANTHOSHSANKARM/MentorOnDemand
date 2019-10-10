import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixmentorComponent } from './sixmentor.component';

describe('SixmentorComponent', () => {
  let component: SixmentorComponent;
  let fixture: ComponentFixture<SixmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
