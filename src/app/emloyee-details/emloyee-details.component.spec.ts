import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeDetailsComponent } from './emloyee-details.component';

describe('EmloyeeDetailsComponent', () => {
  let component: EmloyeeDetailsComponent;
  let fixture: ComponentFixture<EmloyeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmloyeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmloyeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
