import React from "react";
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import AddBlog from './Components/AddBlog/AddBlog'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import Login from './Components/Login/Login'
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AllBlogList from "./Components/AllBlogList/AllBlogList";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminDashBord from "./Components/Admin/AdminDashBord";

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <PrivateRoute  path='/addBlog'>
            <AddBlog />
          </PrivateRoute>
          <Route path='/admin'>
            <AdminDashBord/>
          </Route>
          <Route path='/deleteBlog'>
            <AllBlogList/>
          </Route>
          <Route path='/blogDetails/:id'>
            <BlogDetails/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
