export interface Input {
  placeholder: string;
  type: 'email' | 'text' | 'phone' | 'message' | 'select';
  label: 'Email address' | 'Name' | 'Phone' | 'Reason';
  isNumber?: boolean;
}
