import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth) { }

  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser(){
    // tslint:disable-next-line:no-unused-expression
   return this.auth.authState;
  }

  signOut(){
    return this.auth.signOut();
  }
}
