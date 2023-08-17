import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public texto: string = '';
  public movies: Movie[] = [];
  
  constructor( private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMovieFav().subscribe( (resp ) => {   
      console.log(resp);
      for (const movie in resp) {
        if (resp.hasOwnProperty(movie)) {
          const value = resp[movie];
          this.movies.push(value);
        }
      }      
    });
    
  }
}
