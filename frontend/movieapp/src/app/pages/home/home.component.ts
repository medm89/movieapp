import { Component, HostListener } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie, MoviesResponse } from '../../interface/movies.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   movies: Movie[] = [];

   @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1800;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if ( pos > max ) {
      if ( this.moviesService.loading ) { return; }
      this.moviesService.getMovies().subscribe( movies => {
        this.movies.push(...movies );
        console.log(this.movies.length);
      });
    }
    
    
  }

  constructor( private moviesService: MoviesService){
      
  }
   ngOnInit(){
      this.moviesService.getMovies().subscribe( resp =>{
         this.movies = resp;
      });
      
   }

   ngOnDestroy() {
    this.moviesService.resetPage();
  }

}
