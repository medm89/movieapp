import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthResponse } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string | null | undefined;
  constructor ( private http: HttpClient) { 
    this.getToken();
  }

  logout(){
 
    localStorage.removeItem('token');

  }
  login( user: UserModel){
    const authData = {
      ...user
    };
    return this.http.post<AuthResponse>(
      `${environment.apiUrl}/api/auth/login/`,
      authData
    ).pipe( map( resp => {
      this.saveToken(resp.token);
      return resp;
   }));
  }
  register(user: UserModel){
    const authData = {
      ...user
    };
    return this.http.post<AuthResponse>(
      `${environment.apiUrl}/api/users/`,
      authData
    ).pipe( map( resp => {
       this.saveToken(resp.token);
       return resp;
    }))

  }
  private saveToken ( token: string){

    this.userToken = token;
    localStorage.setItem('token', token);
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expire', hoy.getTime().toString())
    
  }

  getToken(){
    if(localStorage.getItem('token') != null){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }
  isAutenticated(){

    if(this.userToken){
      const expired = Number(localStorage.getItem('expire'));
      const expireDate = new Date();
      expireDate.setTime(expired);
      if(expireDate > new Date()){
        return true;
      }else{
        return false;
      }
    }
    return false;
    
  }
}
