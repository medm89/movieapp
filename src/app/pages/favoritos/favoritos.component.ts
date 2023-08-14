import { Component } from '@angular/core';
import { Movie } from 'src/app/interface/movies.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  public texto: string = '';
  public movies: Movie[] = [];
}
