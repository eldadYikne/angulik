import { Component, OnInit, inject } from '@angular/core';
import { Input, InputValid } from 'src/app/models/contact.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor" />
  `,
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactService = inject(ContactService);
  requestSuccessful: boolean = false;
  form = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
  });
  inputs: Input[] = [
    {
      label: 'Email address',
      placeholder: 'name@example.com',
      type: 'email',
      formControlName: 'email',
      matAutocomplete: 'emailForm',
      warning: 'email must include @ .',
    },
    {
      label: 'FirstName',
      placeholder: 'FirstName',
      type: 'text',
      formControlName: 'firstName',
      matAutocomplete: 'firstNameForm',
      warning: 'must start with uppercase',
    },
    {
      label: 'LastName',
      placeholder: 'LastName',
      type: 'text',
      formControlName: 'lastName',
      matAutocomplete: 'lastNameForm',
      warning: 'must start with uppercase',
    },
    {
      label: 'Phone',
      placeholder: 'xxx-xxxx-xxx',
      type: 'phone',
      formControlName: 'phone',
      matAutocomplete: 'phoneForm',
      warning: 'enter valid phone number please',
      isNumber: true,
    },
  ];
  inputValid: InputValid = {
    email: false,
    firstName: false,
    lastName: false,
    phone: false,
  };
  ngOnInit(): void {
    this.contactService.isContactRequestReceived$.subscribe((request) => {
      console.log(request);
      this.requestSuccessful = request;
    });
  }
  clearForm() {
    this.form = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
      phone: [''],
    });
  }
  handelChange(input: Input) {
    console.log('input', input);

    if (this.form.value[input.formControlName]) {
      if (input.formControlName === 'email') {
        if (this.form.value[input.formControlName]?.includes('@')) {
          this.inputValid[input.formControlName] = true;
        } else {
          this.inputValid[input.formControlName] = false;
        }
      }
      if (input.formControlName === 'phone') {
        console.log('input.formControlName', input.formControlName);
        if (this.form.value[input.formControlName]?.split('').length === 10) {
          this.inputValid[input.formControlName] = true;
        } else {
          this.inputValid[input.formControlName] = false;
        }
      }
      if (
        input.formControlName === 'firstName' ||
        input.formControlName === 'lastName'
      ) {
        if (this.form.value[input.formControlName]) {
          if (
            this.form.value[input.formControlName] ===
            this.capitalizeFirstLetter(
              this.form.value[input.formControlName] as string
            )
          ) {
            this.inputValid[input.formControlName] = true;
          } else {
            this.inputValid[input.formControlName] = false;
          }
        }
      }
    } else {
      this.inputValid[input.formControlName] = false;
    }
  }
  onSubmit() {
    console.log('onSubmit');

    if (
      this.form.valid &&
      Object.values(this.inputValid).every((item) => item)
    ) {
      this.contactService.requestSuccessful();
    }
  }
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
