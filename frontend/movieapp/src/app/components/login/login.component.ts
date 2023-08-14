import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new UserModel();
  constructor( private auth: AuthService,
    private router: Router) {}

  ngOninit(){

    this.user.name  = 'Jhon Doe';

  }
  onSubmit( form: NgForm){

    if( form.invalid){ return ;}

    Swal.fire({ 
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
     }
    );
    Swal.showLoading();
    this.auth.login(this.user).subscribe( 
      (resp) =>{
      Swal.close();
      this.router.navigateByUrl('/pages');
    }, (err)=>{
      Swal.fire({ 
        allowOutsideClick: false,
        icon: 'error',
        text: err.error.message,
        title:'Error de autenticación'
       }
      );
     console.log(err.error.message);
    });
  }
}
