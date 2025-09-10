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
      time: 'July 2021 - April2022',
    },
    {
      title: 'Udemy',
      imgUrl: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
      text: 'On Udemy website you can take different courses, as part of a continuous learning process I am constantly expanding my knowledge in online courses and I enjoy it very much.',
      time: '',
    },
    {
      title: 'Practical',
      imgUrl: 'https://gocode.co.il/assets/logo.621b4054.png',
      time: 'July 2022 – November 2024',
      text: 'For Two years I have been working at the gocode company as a fullstac developer in the languages typescript, nodejs, mongodb, vue, react. I learn quickly and meaningfully in my workplace.',
    },
    {
      title: 'Codere online',
      imgUrl:
        'data:image/jpeg;base64,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',
      time: 'November 2024 - Today',

      text: 'For the last year I have been working at the Codere online company as a fullstac developer in the languages typescript, nodejs, mongodb, react NextJS.',
    },
  ];
  ngOnInit(): void {}
}
