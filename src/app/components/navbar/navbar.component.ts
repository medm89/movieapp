import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidenavOpen = false; 
  searchTerm: string = '';
  searchForm!: FormGroup;
  constructor( private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      txtBuscar: [''] 
    });
   }

  searchMovie( texto: string ) {

    texto = texto.trim();

    if ( texto.length === 0 ) {
      return;
    }
   console.log(texto);
    this.router.navigate(['/pages/buscar', texto ]);

  }

}
