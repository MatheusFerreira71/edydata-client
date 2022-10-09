import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsByNameComponent } from './clients-by-name.component';

describe('ClientsByNameComponent', () => {
  let component: ClientsByNameComponent;
  let fixture: ComponentFixture<ClientsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
