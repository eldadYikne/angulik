import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/formal-education.model';

@Component({
  selector: 'app-practical-experience',
  templateUrl: './practical-experience.component.html',
  styleUrls: ['./practical-experience.component.scss'],
})
export class PracticalExperienceComponent implements OnInit {
  constructor() {}
  projects: Project[] = [
    {
      title: 'Mr. Bit',
      content: 'Application designed to transfer bitcoins between friends.',
      imgUrl:
        'https://github.com/eldadYikne/misterbit_Angular/raw/main/src/assets/img/4.png',
      projLink: 'https://eldadyikne.github.io/misterbit_Angular/#/',
      gitLink: 'https://github.com/eldadYikne/misterbit_Angular',
      technologies: ['angular', 'typescript', 'rxjs', 'sass'],
    },
    {
      title: 'Skyllo',
      content:
        'Helps bring the power of a visual perspective to your team, skyllo is the visual way for teams to collaborate ,For teams of all sizes.',
      imgUrl:
        'https://user-images.githubusercontent.com/109578899/195814208-01f1aeff-fe29-46d0-8971-d010f8fc9319.png',
      projLink: 'https://skyllo.onrender.com/',
      gitLink: 'https://github.com/eldadYikne/Skyllo-frontend',
      technologies: ['react', 'mongo', 'nodejs'],
    },
    {
      title: 'Whatspop',
      content:
        'provides users with the ability to organize and bring related groups together under one umbrella',
      imgUrl:
        'https://github.com/eldadYikne/whatspop/raw/main/src/assets/img/pop6.png',
      projLink: 'https://eldadyikne.github.io/whatspop/#/login',
      gitLink: 'https://github.com/eldadYikne/whatspop',
      technologies: ['react', 'firebase', 'sass'],
    },
    {
      title: 'Barbara',
      content:
        'Local weather forecast & real time rain, storm, ice & snow reports ,By weather information, you can prepare your plan carefully',
      imgUrl:
        'https://github.com/eldadYikne/Barbara-weather/raw/main/src/assets/img/2.png',
      projLink: 'https://eldadyikne.github.io/Barbara-weather/',
      gitLink: 'https://github.com/eldadYikne/Barbara-weather',
      technologies: ['vue', 'tailwind'],
    },
  ];
  ngOnInit(): void {}
}
