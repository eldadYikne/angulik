import { Component, OnInit } from '@angular/core';
import { NavbarLink } from 'src/app/models/navbar.model';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  navbarLinks: NavbarLink[] = [
    { href: '/', text: 'Home' },
    { href: '/formal-education', text: 'Education' },
    { href: '/practical-experience', text: 'Practical' },
    { href: '/contact', text: 'Contact' },
  ];
  menuInMobile: boolean = false;
  ngOnInit(): void {}

  menuInMobileToggle(boolean: boolean) {
    this.menuInMobile = boolean;
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['data']) {
  //     this.handleDataChange(changes['data'].currentValue);
  //   }
  // }

  // handleDataChange(newValue: string) {
  //   console.log('New value:', newValue);
  // }
}
