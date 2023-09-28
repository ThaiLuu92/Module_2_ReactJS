import React, { Component } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaSkype,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import "./style.css"


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="header-top">
            <ul className="header-top-left">
              <li>
                <a href="#">
                  <FaLocationDot /> <p>Địa chỉ</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaEnvelope />
                  <p>Email</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPhone />
                  <p>0901564111</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSkype />
                  <p>Kakehashi Academy</p>
                </a>
              </li>
            </ul>
            <div className="header-top-right" id="top-right">
              <div id="account-user">
                <a href="/pages/auth/register/index.html">
                  <button className="btn" id="btn-register">
                    Đăng ký
                  </button>
                </a>
                <a href="/pages/auth/login/index.html">
                  <button className="btn" id="btn-login">
                    Đăng nhập
                  </button>
                </a>
              </div>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaEnvelope />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <form
                className="search"
                action="/pages/user/courses/courses.html"
              >
                <input
              
                  type="text"
                  name="q"
                  id="inp-search"
                  placeholder="Tìm kiếm"
                />
                < FaMagnifyingGlass className='' />
              </form>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">
              <a href="/index.html">
                <img
                  src="/assets/Image/Logo/logo-1.png"
                  alt=""
                  width="100px"
                  height=""
                />
              </a>
            </div>
            <ul className="header-container-right">
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Tiếng Nhật Online</a>
              </li>
              <li>
                <a href="#">Lớp Học Online</a>
              </li>
              <li>
                <a href="#">Tiếng Nhật OFFLINE</a>
              </li>
              <li>
                <a href="/pages/user/courses/courses.html">Danh mục khóa học</a>
              </li>
              <li>
                <a href="#">Thư viện</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


