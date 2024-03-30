import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  isSignIn: boolean = true;
  email: string = '';
  password: string = '';

  constructor(private auth: AuthenticationService,private nav:Router) { }

  ngOnInit(): void {
  }

  toggleSignInUp() {
    this.isSignIn = !this.isSignIn;
  }
  onSubmit(form: NgForm) {
    debugger
    if (form.valid) {
      let user : User = { email: this.email, password: this.password }
      if (this.isSignIn) {
        let exsitingUser = this.auth.userExists(user);
        if (exsitingUser) {
          this.auth.setUser(user);
          this.nav.navigateByUrl('home');
        }
      }else {
        this.auth.addUser(user);
        this.nav.navigateByUrl('home');
      }
    }
  }
}
