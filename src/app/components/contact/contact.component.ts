import { Component, OnInit } from '@angular/core';
import { Input } from 'src/app/types/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
