import React from 'react'

export default function Footer() {
    let style ={
        height:'60px',
        margin:'0px',
        padding:'16px',
        backgroundColor:'#192131'
    }
    return (
        <div>
            <footer className="mt-4 text-light" style={style}>
                <p className="float-end"><a href="#" className="text-light">Back to top</a></p>
                <p>© 2021 BlogSite, Inc. · <a href="#" className="text-light">Privacy</a> · <a href="#" className="text-light">Terms</a></p>
            </footer>
        </div>
    )
}
