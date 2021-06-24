import React from 'react';
import './PostList.css'
import SideList from '../SideList/SideList'
import messiImage from '../../Images/messi.jpg'
import tamimImage from '../../Images/tamim.jpg'
import likeImage from '../../Images/thumb-up.png'
import comment from '../../Images/comments.png'

const PostList = () => {
    return (
        <div>
            <div className="row mt-5 container">
                <div className="col-md-1">
                   
                    <SideList />

                </div>
                <div className="col-md-10">
                    <div className="row ">
                        <div className="col-md-4 single-post">
                            <div>
                                <h5 className='text-white'>Introducing the new GitHub Issues</h5>
                                <p className='text-dark'>Date: 26th july</p>
                            </div>
                            <img className="card-img-top post-image" src={tamimImage} alt="tamimImage" />
                        </div>
                        <div className="col-md-4 single-post">
                            <div>
                                <h5 className='text-dark'>Introducing the new GitHub Issues</h5>
                                <p className='text-dark'>Date: 26th july</p>
                                <img className="card-img-top post-image" src={tamimImage} alt="tamimImage" />
                            </div>
                            <div>
                                <img className="logo me-4" src={likeImage} alt="tamimImage" />
                                <img className="logo" src={comment} alt="tamimImage" />

                            </div>


                        </div>
                        <div className="col-md-4 single-post">
                            <div>
                                <h5 className='text-dark'>Introducing the new GitHub Issues</h5>
                                <img className="card-img-top post-image" src={tamimImage} alt="tamimImage" />
                            </div>
                            <div>
                                <img className="logo me-4" src={likeImage} alt="tamimImage" />
                                <img className="logo" src={comment} alt="tamimImage" />

                            </div>


                        </div>
                        <div className="col-md-4 single-post">
                            <div>
                                <h5 className='text-white'>Introducing the new GitHub Issues</h5>
                                <img className="card-img-top post-image" src={tamimImage} alt="tamimImage" />
                            </div>
                            <div className="div">
                                {/* <FontAwesomeIcon icon={FaThumbsUp} className="fa-3x" /> */}
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostList;