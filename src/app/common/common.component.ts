import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common',
  standalone: true,
  imports: [],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})

export class CommonComponent implements OnInit {
  ngOnInit() {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries, observer) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        } else {
          // entry.target.classList.remove('animate-slide-up');
        }
      });

    });
    elements.forEach((element) => observer.observe(element));
  }
}
