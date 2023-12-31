import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPosterGridComponent } from './peliculas-poster-grid.component';

describe('PeliculasPosterGridComponent', () => {
  let component: PeliculasPosterGridComponent;
  let fixture: ComponentFixture<PeliculasPosterGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasPosterGridComponent]
    });
    fixture = TestBed.createComponent(PeliculasPosterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
