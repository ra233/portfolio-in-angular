import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, RouterModule],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in-out', style({ opacity: 1 }))])
    ])
  ]
})
export class AppComponent {}
