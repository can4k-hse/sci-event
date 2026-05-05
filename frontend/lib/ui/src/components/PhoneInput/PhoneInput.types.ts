export type Country = {
  code: string;
  dialCode: string;
  flag: string;
  mask: string;
};

export type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  countryCode?: string;
  onCountryChange?: (code: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
};
