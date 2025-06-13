import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule]
})
export class EducationComponent {
  educationDetails = [
    {
      degree: 'Bachelor of Engineering (BE)',
      college: 'Siddaganga Institute of Technology',
      passingYear: '2021',
      highlights: [
        'Specialized in Information Science'
      ]
    },
    {
      degree: 'Pre-University (PU)',
      college: 'Sarvodaya PU College',
      passingYear: '2017',
      highlights: [
        'Majored in Science stream (PCMB)'
      ]
    },
    {
      degree: 'High School',
      college: 'Siddaganga High School',
      passingYear: '2015'
    }
  ];
}
