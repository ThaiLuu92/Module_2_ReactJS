import { I_Login, I_Register } from "../../../types/Auth";
import { setLocalStorage } from "../../../utils/method";
import { AuthRepository } from "./Auth.Repository";


class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  login(data: I_Login) {
    const user = this.authRepository.getUserByEmailPassword(
      data.email,
      data.password
    );

    if (user) {
   
      setLocalStorage("userLogin", user);
      return {
        status: "success",
        message: "Đăng nhập thành công",
        data: user,
      };
    }

    return {
      status: "error",
      message: "Email hoặc mật khẩu không đúng",
      data: null,
    };
  }

  register(data: I_Register) {
    const user = this.authRepository.getUserByEmail(data.email);

    if (user) {
      return {
        status: "error",
        message: "Email đã tồn tại",
        data: null,
      };
    }

    data.id = Date.now().toString().substring(0, 10);
    this.authRepository.createUser(data);

    return {
      status: "success",
      message: "Đăng ký thành công",
      data: data,
    };
  }
}

export default AuthService;
