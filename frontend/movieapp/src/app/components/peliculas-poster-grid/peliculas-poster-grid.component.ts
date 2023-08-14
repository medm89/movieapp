import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interface/movies.interface';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent {
  @Input()
  movies!: Movie[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onMovieClick( movie: Movie ) {
    this.router.navigate(['/pages/pelicula/', movie.id ]);
  }
}
