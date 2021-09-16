import React from 'react'
import SideBar from './SideBar'
import BlogApi from '../blogApi.json'

export default function BlogContent(props) {
    let style = {
        border: '.5px solid rgb(70, 68, 68)',
        fontFamily:'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'
    }

    return (
        <div style={{marginTop:'110px'}}>
            <SideBar />
            <div className='container my-3 mx-auto' style={style}>
                {BlogApi.map((element)=>{
                    if((element.id)+"" === props.contentId){
                        // console.log(element.id);
                        // console.log(props.contentId);
                        return (<h1 className='my-2 mb-2 mx-auto'>{element.title}</h1>)
                    }
                })}
                
            </div>
            
            <div className="container my-4 mx-auto" style={style}>
            {BlogApi.map((element)=>{
                    if((element.id)+"" === props.contentId){
                        console.log(element.id);
                        console.log(props.contentId);
                        return ( <p className="mt-4 my-2">{element.blogContent}</p>)
                    }
                })}
            </div>
        </div>
    )
}
