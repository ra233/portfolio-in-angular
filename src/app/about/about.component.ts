import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in-out', style({ opacity: 1 }))])
    ])
  ]
})
export class AboutComponent {
  profile = {
    name: 'Ranjitha',
    image: '/profile.jpg',
    bio: 'I am a dedicated Front-end Developer with over three years of experience in crafting dynamic, interactive, and user-friendly web applications. My expertise lies in Angular, complemented by hands-on exposure to Node.js.. With a keen eye for UI/UX design, I blend creativity with technical precision to deliver seamless digital experiences.',
    experience: '3+ years in Web Development',
    certifications: [
      'Namaste Javascript - NamasteDev',
      'Namaste NodeJS - NamasteDev',
      'Azure AI fundamentals(AI-900) - Microsoft'
    ],
  };
}
