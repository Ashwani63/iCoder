import React from 'react'
import SideBar from './SideBar'
import BlogApi from '../blogApi.json'
import Section from './Section'

export default function Blogs(props) {


    return (
        <>
            <SideBar />


            <div className="container" style={{marginTop:'130px'}}>
                <div className="row">
                    {BlogApi.map((element) => {
                        if (element.domain === props.domain) {
                            // console.log(props.domain);
                            return (
                                <div className="col md-4 my-4" >
                                    <Section id={element.id} domain={element.domain} title={element.title} date={element.date} description={element.description} blogContent={props.blogContent} image={props.image}/>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    )
}
