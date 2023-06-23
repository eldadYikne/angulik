export interface Input {
  placeholder: string;
  type: 'email' | 'text' | 'phone' | 'message' | 'select';
  label: 'Email address' | 'FirstName' | 'LastName' | 'Phone' | 'Reason';
  isNumber?: boolean;
  formControlName: 'email' | 'firstName' | 'lastName' | 'phone';
  matAutocomplete: 'emailForm' | 'firstNameForm' | 'lastNameForm' | 'phoneForm';
  warning: string;
  onInput?:
    | "this.value = this.value.replace(/[^a-zA-Z]/g, '')"
    | "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(..*)./g, '$1')";
}
export interface InputValid {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
}
