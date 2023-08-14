import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MoviesResponse } from '../interface/movies.interface';
import { MovieResponse } from '../interface/movie-details.interface';
import { FavResponse } from '../interface/favorites.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moviesPage = 1;
  public loading: boolean = false;

  constructor( private http: HttpClient) { }

  get params(){
    return{
      page: this.moviesPage.toString(),
    }
  }
  getMovies():Observable<Movie[]>{
    let token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: token
    });

    if(  this.loading){
      return of([]);
    }
    this.loading = true;
    return this.http.get<MoviesResponse>(`${environment.apiUrl}/api/movies/`, {headers, params: this.params}).pipe(
      map( (resp)=> resp.results),
      tap(()=>{
        console.log('llama al servicio', this.moviesPage);
        this.moviesPage +=1;
        this.loading = false;
      })
    );
  }

  searchMovies( texto: string ):Observable<Movie[]> {

    const params = { search: texto };

    return this.http.get<MoviesResponse>(`${ environment.apiUrl }/api/movies/search/`, {
      params
    }).pipe(
      map( resp => resp.results )
    )

  }
  getMovieDetail( id: string ){
    const params = { movieId: id };
    return this.http.get<MovieResponse>(`${ environment.apiUrl }/api/movies/search/`, {
      params
    }).pipe(
      catchError( err => of(null) )
    )
  }
  saveMovieFav( id: string ){
    let token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: token
    });
    const params = { movieid: id };
      return this.http.post<FavResponse>(`${ environment.apiUrl }/api/movies/saveFav`,params,{headers});
  }
  resetPage() {
    this.moviesPage = 1;
  }
}
