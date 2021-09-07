import React from 'react'
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{marginTop:'55px'}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-dark ">Welcome To iCoder</h2>
                            <p className="text-dark">Explore blogs on the topic you like the most !</p>
                            {/* <button type="button" className="btn btn-danger mx-1">Python</button>
                            <button type="button" className="btn btn-success mx-1">Javascript</button>
                            <button type="button" className="btn btn-warning mx-1">Php</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Best Blog Site</h2>
                            <p>Explore blogs on the topic you like the most !</p>
                            {/* <button type="button" className="btn btn-danger mx-1">Python</button>
                            <button type="button" className="btn btn-success mx-1">Javascript</button>
                            <button type="button" className="btn btn-warning mx-1">Php</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Blogging is Fun</h2>
                            <p>Explore blogs on the topic you like the most !</p>
                            {/* <button type="button" className="btn btn-danger mx-1">Python</button>
                            <button type="button" className="btn btn-success mx-1">Javascript</button>
                            <button type="button" className="btn btn-warning mx-1">Php</button> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
