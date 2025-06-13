import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.animateCircles();
  }

  animateCircles() {
    setTimeout(() => {
      document.getElementById('html')!.style.opacity = '1';
      document.getElementById('css')!.style.opacity = '1';
      document.getElementById('js')!.style.opacity = '1';
    }, 500);
  }
}
