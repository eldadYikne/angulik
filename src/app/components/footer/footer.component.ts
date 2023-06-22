import { Component, OnInit } from '@angular/core';
import { IconLink } from 'src/app/models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  iconLinks: IconLink[] = [
    { type: 'github', href: 'https://github.com/eldadYikne' },
    { type: 'linkedin', href: 'https://www.linkedin.com/in/eldad-yikne/' },
  ];
  ngOnInit(): void {}
}
