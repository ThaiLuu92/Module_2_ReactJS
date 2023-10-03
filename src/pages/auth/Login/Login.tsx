import React, { Component } from 'react'
import "./Login.css"

export class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="forms">
                    <div className="form login">
                        <span className="title">Đăng Nhập</span>
                        <form action="#" id="form-login">
                            <div className="input-filed">
                                <input
                                    type="text"
                                    placeholder="Nhập địa chỉ email"

                                    id="inplogin-email"
                                />
                                <i className="fa-regular fa-envelope" />
                                <p className="error" id="error-email" />
                            </div>
                            <div className="input-filed">
                                <input
                                    className="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"

                                    id="inplogin-password"
                                />
                                <i className="fa-solid fa-lock icon" />
                                <i className="fa-regular fa-eye-slash showHidenEye" />
                                <p className="error" id="error-password" />
                            </div>
                            <div className="check-text">
                                <div className="check-content">
                                    <input type="checkbox" name="" id="logcheck" />
                                    <label htmlFor="logcheck" className="text">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="text">
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <div className="input-filed button">
                                <input type="submit" defaultValue="Đăng Nhập" />
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">
                                Bạn chưa có tải khoản?{" "}
                                <a
                                    href="/pages/auth/register/index.html"
                                    className="text signup-link"
                                >
                                    Đăng ký
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
