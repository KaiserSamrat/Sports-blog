import React from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import PostList from '../PostList/PostList'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <PostList/>
        </div>
    );
};

export default Home;