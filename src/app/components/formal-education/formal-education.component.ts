import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/practical-experience.model';

@Component({
  selector: 'app-formal-education',
  templateUrl: './formal-education.component.html',
  styleUrls: ['./formal-education.component.scss'],
})
export class FormalEducationComponent implements OnInit {
  constructor() {}
  courses: Course[] = [
    {
      title: 'Coding academy',
      imgUrl: 'https://www.coding-academy.org/images/ca-logo-dark1.png',
      text: '12 intensive weeks of programming studies in their Zoom, rapid integration in the high-tech industry. Hundreds of students have already chosen to make the most of these days and learn to program in the well-known programming course in Israel. In order to succeed in the high-tech industry, you should study with the best and most well-known - coding-academic.',
    },
    {
      title: 'Udemy',
      imgUrl: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      text: 'On Udemy website you can take different courses, as part of a continuous learning process I am constantly expanding my knowledge in online courses and I enjoy it very much.',
    },
    {
      title: 'Practical',
      imgUrl:
        'https://gocode.co.il/assets/logo.621b4054.png',
      text: 'For the last year I have been working at the gocode company as a fullstac developer in the languages typescript, nodejs, mongodb, vue, react. I learn quickly and meaningfully in my workplace.',
    },
  ];
  ngOnInit(): void {}
}
