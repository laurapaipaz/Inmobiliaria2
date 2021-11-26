import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaInmuebleComponent } from './consulta-inmueble.component';

describe('ConsultaInmuebleComponent', () => {
  let component: ConsultaInmuebleComponent;
  let fixture: ComponentFixture<ConsultaInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
