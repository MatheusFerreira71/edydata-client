import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAndCountComponent } from './salary-and-count.component';

describe('SalaryAndCountComponent', () => {
  let component: SalaryAndCountComponent;
  let fixture: ComponentFixture<SalaryAndCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAndCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAndCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
