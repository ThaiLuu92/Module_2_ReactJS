class AuthEvent {
  onSubmit(action: string) {
    // Xử lý dữ liệu và gọi các service liên quan tại đây
    if (action === "login") {
      // Xử lý đăng nhập
    } else if (action === "register") {
      // Xử lý đăng ký
    }
  }
}

export default AuthEvent;
