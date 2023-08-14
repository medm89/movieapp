import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from "../pipes/pipes.module";
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
    declarations: [
        HomeComponent,
        PeliculaComponent,
        BusquedaComponent,
        FavoritosComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        PipesModule,
        MatButtonModule,
        FlexLayoutModule
    ]
})
export class PagesModule { }
