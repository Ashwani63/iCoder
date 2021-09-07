import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function SideBar() {

    return (
        <div>
            <hr style={{margin:'0px',}}/>
            <nav className=" fixed-top navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'57px'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#secondnavbarSupportedContent" aria-controls="secondnavbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="secondnavbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-danger" aria-current="page" to='/javascript'><strong>Javacsript</strong></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-primary" to='/python'><strong>Python</strong></Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-danger" to='/java'><strong>Java</strong></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-warning" to='/react'><strong>React</strong></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-primary" to='/html'><strong>Html</strong></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active text-danger" to='/css'><strong>Css</strong></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    )
}
