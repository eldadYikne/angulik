export interface Input {
  placeholder: string;
  type: 'email' | 'text' | 'phone' | 'message' | 'select';
  label: 'Email address' | 'FirstName' | 'LastName' | 'Phone' | 'Reason';
  isNumber?: boolean;
  formControlName: 'email' | 'firstName' | 'lastName' | 'phone';
  matAutocomplete: 'emailForm' | 'firstNameForm' | 'lastNameForm' | 'phoneForm';
  warning: string;
}
export interface InputValid {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
}
