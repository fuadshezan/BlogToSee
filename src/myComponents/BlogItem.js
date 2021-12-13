import React from 'react'
import { BrowserRouter as Router, useHistory,Link } from 'react-router-dom'
import image from './images/whatisblog.png'

export default function BlogItem({ blog }) {
    //Defining the card size
    let card_size = {
        maxWidth: "540px",
    }
    //defining the image size
    let img_size={
        height: "100%",
        width:"100%",
    }
    let des=blog.description;
    let maxLength=200;
    des=des.substr(0,maxLength);
    des=des.substr(0,Math.min(des.length,des.lastIndexOf(" ")));

    return (
        <div className='my-3 d-flex justify-content-center' >
            <div className="card mb-3" style={card_size}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." style={img_size}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{des}...</p>
                            <Link className='btn btn-primary' to={{
                                pathname:"./showBlog",
                                state:blog,
                            }}>
                             Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
