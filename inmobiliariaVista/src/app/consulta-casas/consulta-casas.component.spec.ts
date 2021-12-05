import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCasasComponent } from './consulta-casas.component';

describe('ConsultaCasasComponent', () => {
  let component: ConsultaCasasComponent;
  let fixture: ComponentFixture<ConsultaCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
