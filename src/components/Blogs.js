import React from 'react'
import JSContent from './Content'
import SideBar from './SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Content from './Content'
import BlogApi from '../blogApi.json'
import Section from './Section'
import { useState } from 'react'

export default function Blogs(props) {

    let [load, setLoad] = useState(false);

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
