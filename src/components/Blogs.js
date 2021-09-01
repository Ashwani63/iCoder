import React from 'react'
import SideBar from './SideBar'
import BlogApi from '../blogApi.json'
import Section from './Section'

export default function Blogs(props) {


    return (
        <>
            <SideBar />


            <div className="container my-4">
                <div className="row">
                    {BlogApi.map((element) => {
                        if (element.domain === props.domain) {
                            // console.log(props.domain);
                            return (
                                <div className="col md-4 my-4">
                                    <Section id={element.id} domain={element.domain} title={element.title} date={element.date} description={element.description} blogContent={props.blogContent}/>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    )
}
