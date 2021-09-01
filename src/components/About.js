import React from 'react'
import Footer from './Footer';
import img5 from './Images/download.png'

export default function About() {
    let style2 = {
        height: "300px",
        width: "300px",
        borderRadius:'50%'
    };

    return (
        <>
    

            <div className="container my-3 d-flex justify-content-center">
                <img src={img5} alt=""  style={style2} className="" />
            </div>

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2>Our story</h2>
                            <p className="lead">
                                Hello , I am Ashwani Kumar Singh founder of this blog website and i will be responsible for providing you blogs on different topics which is useful.
                                Founded in 2021 as iCoder Blog Website ,we are providing blogs on the various topics which students or professionals might find confusing.
                            </p>
                            <p>We are truly dedicated towards our work and provides good quality of content to our users to remove their doubts and explore the new topics.</p>
                            {/* <h3 className="mt-4">We do this across:</h3>
                            <ul>
                                <li>We provide distribution of the products to the retailer on the basis of thier orders.</li>
                                <li>We are mostlty and generally operated in the reason of the Varanasi .</li>
                                <li>We also provide different offers schemes for the motivation of our retailers and which also motivates him to sell the products.</li>
                            </ul> */}

                            
                            <div className="row g-4 my-4">
                                <h3>Our Teams</h3>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">

                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" src=""
                                                alt="avatar" style={style2} />
                                        </div>
                                        <h5>Ishant Srivastav</h5>
                                        <p className="m-0"> </p>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/vcfhg"><i
                                                    className="fab fa-facebook-square"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/vfjghv"><i
                                                    className="fab fa-twitter-square"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/hgjhv"><i className="far fa-envelope"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">

                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" src=''
                                                alt="avatar" style={style2} />
                                        </div>
                                        <h5>Ayushman Dubey</h5>
                                        <p className="m-0"> </p>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/hjfjg"><i className="far fa-envelope"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">

                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" src=''
                                                alt="avatar" style={style2} />
                                        </div>
                                        <h5>Mayank Mishra</h5>
                                        <p className="m-0"> </p>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/hfyj"><i
                                                    className="fab fa-twitter-square"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/jgftjg"><i className="far fa-envelope"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">

                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" src=''
                                                alt="avatar" style={style2} />
                                        </div>
                                        <h5>Ritik Gilani</h5>
                                        <p className="m-0"> </p>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/jbscgj"><i
                                                    className="fab fa-facebook-square"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link px-2 fs-5" href="/bcgcku"><i className="far fa-envelope"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <h3 className="mb-3 mt-5">What we do</h3> */}
                            {/* <div className="row">

                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" src='' alt="Card image" style={style3} />
                                    <h4 className="mt-3"></h4>
                                    <p>We provide regional distribution service of our products.</p>
                                </div>

                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" src='' alt="Card image" style={style3} />
                                    <h4 className="mt-3">Delivery Services</h4>
                                    <p>We provide door delivery of products to our retailers.</p>
                                </div>

                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" src='' alt="Card image" style={style3} />
                                    <h4 className="mt-3">Also Provides Schemes</h4>
                                    <p> We also provides exclusive and benefcial schemes to our retailers to motivate them for selling the products.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        
    </>
    );
}
