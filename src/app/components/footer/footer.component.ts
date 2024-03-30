import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  isVisible:boolean = true;

  constructor(private router:Router) {
    
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
      }
    });
  }
}
