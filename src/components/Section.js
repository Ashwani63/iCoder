import React from 'react'
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'
import BlogApi from '../blogApi.json'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Section(props) {

    let style={
        width: '22rem'
    }
    let style1 = {
        left: "85%",
        zIndex: '1'
    }

    let {id ,domain, title, date, description ,blogContent} = props;

    return (
        <>


            <div className="card fade-out " style={style}>
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={style1}>{domain}</span> </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">On {date}</small></p>
                    <Link to="/blogContent" id={id} className="btn btn-sm btn-dark" onClick={blogContent}>Explore...</Link>
                </div>
            </div>





        </>
    )
}
