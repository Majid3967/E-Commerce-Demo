import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isVisible:boolean = true;
  isSignIn:boolean = false;

  constructor(private router:Router,private auth: AuthenticationService) {
    
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/user'){
          this.isVisible = false;
        }
        else{
          this.isVisible = true;
        }
        let user = this.auth.getUser();
        if (user) {
          this.isSignIn = true;
        }
      }
    });
  }
  logout(){
    this.auth.logout();
    this.isSignIn = false;
    this.router.navigateByUrl('user');
  }

}
