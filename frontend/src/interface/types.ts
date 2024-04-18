export interface CountryCode {
  en_name: string;
  number: string;
}

export interface EmployerSignupFormInputs {
  userId: string;
  password: string;
  password2: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  countryCode: string;
  // mobile: string;
  // country: string;
  mobile: number;
  country: string;
  language: string;
  agreeToTerms: boolean;
  verificationCode?: string;
}

export interface UserSignupData {
  firstName: string;
  lastName: string;
  company: string;
  userId: string;
  email: string;
  password: string;
  password2: string;
  country: number;
  mobile: number;
  language: string;
}
