import React from 'react'
import { Link } from "react-router-dom";
export default function showBlog(props) {
    let blog = props.location.state;
    return (
        <div className='container my-3'>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.description}</p>
                            <div className="form-group shadow-textarea black-border-focus mb-3">
                                <label htmlfor="exampleFormControlTextarea6"></label>
                                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..."></textarea>
                            </div>
                            <Link className="btn btn-info" to="/"> Submit </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
