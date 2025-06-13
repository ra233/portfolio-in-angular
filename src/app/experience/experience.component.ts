import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  imports: [CommonModule]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineer',
      company: 'Accenture India',
      duration: 'Dec 2022 - present',
      responsibilities: [
        'Developed and maintained scalable web applications using modern JavaScript frameworks.',
        'Collaborated with cross-functional teams to design, develop, and deploy full-stack solutions.',
        'Integrated RESTful APIs and optimized performance for seamless user experiences.',
        'Conducted code reviews and mentored junior developers on best practices.',
        'Familiar with Angular security best practices by implementing authentication/authorization mechanisms with JWT.'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture India',
      duration: 'Sep 2021 – Nov 2022',
      responsibilities: [
        'Designed and developed responsive UI components using Angular, HTML, CSS, and Bootstrap.',
        'Created detailed mockups and prototypes, refining designs based on client feedback.',
        'Developed dynamic and reusable Angular components, ensuring modularity and maintainability.',
        'Implemented custom Angular pipes for data transformation and formatting.'
      ]
    }
  ];
}
