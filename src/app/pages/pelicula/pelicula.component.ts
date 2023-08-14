import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from 'src/app/interface/movie-details.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { FavResponse } from '../../interface/favorites.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  public movie!: MovieResponse;
  public isfav = false;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private location: Location,
               private router: Router ) { }
  ngOnInit(): void {
     const { id } = this.activatedRoute.snapshot.params;
          
      this.moviesService.getMovieDetail( id ).subscribe( ( movi ) => {
        if ( movi != null ) {
          this.movie = movi;
        } else {
          this.router.navigateByUrl('/home');
          return;
        }     
        console.log(movi);
      });
  }
  onRegresar() {
    this.location.back();
  }
  saveFav(){
    const { id } = this.activatedRoute.snapshot.params;
          
      this.moviesService.saveMovieFav( id ).subscribe( (resp ) => {   
        console.log(resp.isFav);
        this.isfav = resp.isFav;
      });
  }
}

