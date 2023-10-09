export interface I_Login {
  email: string;
  password: string;
}

export interface I_Register extends I_Login {
  id:string;
  repeatPassword: string;
  userName: string;
}
