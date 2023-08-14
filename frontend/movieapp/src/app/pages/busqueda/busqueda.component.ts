import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public texto: string = '';
  public movies: Movie[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.texto = params['texto'];

      this.moviesService.searchMovies( params['texto'] ).subscribe( movies => {
        this.movies = movies;
      })
    })

  }
}
