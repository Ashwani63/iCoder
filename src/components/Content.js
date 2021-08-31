import React,{useState} from 'react'


export default function Content(props) {

    const [heading, setHeading] = useState("Heading")
    const [para, setPara] = useState("Your Blog Content Will Be Displayed Here");

    let style ={
        fontFamily:'cursive'
    }

    return (
        <div className="container my-4 " style={style}>
            <h2 className="my-2">{heading}</h2>
            <hr />
            <p className="my-2" style={style}>{para}</p>
        </div>
    )
}
