// auth/AuthRepository.ts
import { setLocalStorage, getLocalStorage } from "../../../utils/method";
import { I_Login, I_Register } from "../../../types/Auth";

export class AuthRepository {
  getUserByEmailPassword(email: string, password: string) {
    const accounts:I_Login[] = getLocalStorage("accounts") || [];
    const user = accounts.find(
      (account) => account.email === email && account.password === password
    );
    return user;
  }

  getUserByEmail(email: string) {
    const accountDB:I_Register[] = getLocalStorage("accounts") || [];
    const user = accountDB.find((account) => account.email === email);
    return user;
  }

  createUser(user: any) {
    const accountDB: I_Register[] = getLocalStorage("accounts") || [];
    user.id = Date.now().toString().substring(0, 10);
    accountDB.push(user);
    setLocalStorage("accounts", accountDB);
  }
}

export default AuthRepository;
