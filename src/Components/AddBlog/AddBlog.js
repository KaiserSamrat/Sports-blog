import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddBlog.css'
const AddBlog = () => {
    const [blog, SetBlog] = useState({})
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/addBlog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Item is successfully added')
                history.replace('/');
            })
    }
    const handleOnBlur = (e) => {
        const newBlog = blog;
        newBlog[e.target.name] = e.target.value;
        SetBlog(newBlog)
      
    }

    return (
        <>
            <div>
                <section class="container-fluid squad-bg">

                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-5 col-md-5 mt-5">
                            <form class="add-area" onSubmit={handleSubmit}>
                                <h5 class=" text-center "> Add Blog</h5>
                                <h5 class="text-center "> Provide Details </h5>
                                <div class="form-group mb-3">
                                    <label for="">Title:</label>
                                    <input type="text" class="form-control" onBlur={handleOnBlur} name="title" placeholder="Enter your Blog Title here" required />

                                </div>
                                <div class="form-group  mb-3">
                                    <label for="description">Description</label>
                                    <textarea cols='100' rows='4' type="text" class="form-control" onBlur={handleOnBlur} name="description"  placeholder="Enter your Description here" required />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="img">Title:</label>
                                    <input type="text" class="form-control" onBlur={handleOnBlur} name="img" placeholder="Image Url" required />

                                </div>




                                <button type="submit" class="btn btn-success button text-black">Submit</button>
                            </form>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AddBlog;