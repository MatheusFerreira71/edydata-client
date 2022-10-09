import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsByDateComponent } from './clients-by-date.component';

describe('ClientsByDateComponent', () => {
  let component: ClientsByDateComponent;
  let fixture: ComponentFixture<ClientsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
