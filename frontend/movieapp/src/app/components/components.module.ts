import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { SlidershowComponent } from './slidershow/slidershow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule,
    MatCardModule,
    PipesModule,   
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
})
export class ComponentsModule { }
