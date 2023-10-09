import React, { useState } from 'react';
import AuthEvent from "./Auth.Event"
import AuthService from './Auth.Service';
function FormAuth() {
    const [action, setAction] = useState('register');
    const [formData, setFormData] = useState({
        inputUser: '',
        inputEmail: '',
        inputPassword: '',
        inputRepeatPassword: ''
    });
    const authEvent = new AuthEvent();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };
    const handleSubmit = (e: React.FormEvent, action: string) => {
        e.preventDefault();
        authEvent.onSubmit(action);
    };

    return (

        <div className="container">
            <div className="forms">
                <div className="form register">
                    <span className="title">{action === 'register' ? 'Đăng ký' : 'Đăng nhập'}</span>
                    <form action="#" id="form-register" onSubmit={(e) => handleSubmit(e, 'register')}>
                        <div className="input-filed">
                            <input
                                type="text"
                                placeholder="Nhập họ tên"
                                id="input-user"
                                name="input-user"
                                value={formData.inputUser}
                                onChange={handleInputChange}
                            />
                            <i className="fa-regular fa-user" />
                            <p className="error" id="error-user" />
                        </div>
                        <div className="input-filed">
                            <input
                                type="text"
                                placeholder="Nhập địa chỉ email"
                                id="input-email"
                                name="input-email"
                                value={formData.inputEmail}
                                onChange={handleInputChange}
                            />
                            <i className="fa-regular fa-envelope" />
                            <p className="error" id="error-email" />
                        </div>
                        <div className="input-filed">
                            <input
                                className="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                id="input-password"
                                name="input-password"
                                value={formData.inputPassword}
                                onChange={handleInputChange}
                            />
                            <i className="fa-solid fa-lock icon" />
                            <i className="fa-regular fa-eye-slash showHidenEye" />
                            <p className="error" id="error-password" />
                        </div>
                        <div className="input-filed">
                            <input
                                className="password"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                id="input-repeat-password"
                                name="input-repeat-password"
                                value={formData.inputRepeatPassword}
                                onChange={handleInputChange}
                            />
                            <i className="fa-solid fa-lock icon" />
                            <i className="fa-regular fa-eye-slash showHidenEye" />
                            <p className="error" id="error-repeat-password" />
                        </div>
                        <div className="check-text">
                            <a href="#" className="text">
                                Quên mật khẩu?
                            </a>
                        </div>
                        <button type="submit">{action === 'register' ? 'Register' : 'Login'}</button>
                    </form>
                    <div className="login-signup">
                        <span className="text">
                            {action === 'register' ? 'Bạn đã có tài khoản?' : 'Chưa có tài khoản?'}
                            <a
                                href="#"
                                className="text login-link"
                                onClick={(e) => handleSubmit(e, action === 'register' ? 'login' : 'register')}
                            >
                                {action === 'register' ? 'Đăng nhập' : 'Đăng ký'}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAuth
