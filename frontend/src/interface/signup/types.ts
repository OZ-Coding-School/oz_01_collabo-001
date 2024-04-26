export interface CountryCode {
  id: number;
  en_name: string;
  number: string;
}

export interface EmployerSignupFormInputs {
  user_id: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  countryCode: string;
  mobile: number;
  country: string;
  language: string;
  agreeToTerms: boolean;
  verificationCode?: string;
}

export interface UserSignupData {
  first_name: string;
  last_name: string;
  user_id: string;
  company: string;
  email: string;
  password: string;
  password2: string;
  country: string;
  mobile: number;
  language: string;
}
