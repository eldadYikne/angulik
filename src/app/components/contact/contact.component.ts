import { Component, OnInit } from '@angular/core';
import { Input } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor" />
  `,
})
export class ContactComponent implements OnInit {
  constructor() {}
  inputs: Input[] = [
    { label: 'Email address', placeholder: 'name@example.com', type: 'email' },
    { label: 'Name', placeholder: 'Name', type: 'text' },
    {
      label: 'Phone',
      placeholder: 'xxx-xxxx-xxx',
      type: 'phone',
      isNumber: true,
    },
    {
      label: 'Reason',
      placeholder: 'Select contact reason',
      type: 'select',
    },
  ];
  ngOnInit(): void {}
}
