export type FormValues = {
  email: string;
  password: string;
};

export type Name = 'email' | 'password';

export type ReturnKeyType =
  | 'none'
  | 'done'
  | 'search'
  | 'default'
  | 'go'
  | 'next'
  | 'send'
  | 'previous'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call';
