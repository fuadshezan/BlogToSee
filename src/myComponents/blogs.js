import React from 'react'
import BlogItem from "./BlogItem"
export default function blogs(props) {
    return (
        <div className='container'>
            <h2 className='my-3 text-center'>Blogs List</h2>
            {props.blogs.map((blog)=>{
                return  < BlogItem blog={blog} key={blog.id} />
            })}
        </div>
    )
}
