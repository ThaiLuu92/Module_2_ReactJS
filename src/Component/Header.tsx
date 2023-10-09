import React from 'react'
import images from '../assets/img'
import { NavLink } from 'react-router-dom'
import { publicRouter } from '../routes'


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to="#page-top">
                    <img src={images.navbarLogo} alt="..." />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars ms-1" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        {publicRouter.map((routes, index) => {
                            if (routes.path === '/') {
                                return
                            }

                            return <li className="nav-item" key={index}>
                                <NavLink className="nav-link" to={routes.path}>
                                    {routes.title}
                                </NavLink>
                            </li>

                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
