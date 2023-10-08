export interface I_Login {
  email: string;
  password: string;
}

export interface I_Resgister extends I_Login {
  repeatPassword: string;
  userName: string;
}
