import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerDesafioComponent } from './tercer-desafio.component';

describe('TercerDesafioComponent', () => {
  let component: TercerDesafioComponent;
  let fixture: ComponentFixture<TercerDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerDesafioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercerDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
