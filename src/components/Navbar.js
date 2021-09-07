import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-success" href="/icoder"><strong>iCoder</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-warning" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-danger" to='/blogs'>Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active text-primary" to='/contact'>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-secondary" to='/about'>About</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
