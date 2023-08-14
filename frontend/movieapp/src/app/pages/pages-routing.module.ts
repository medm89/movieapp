import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FavoritosComponent } from './favoritos/favoritos.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'buscar/:texto', component: BusquedaComponent },
  { path: 'favoritos', component: FavoritosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}