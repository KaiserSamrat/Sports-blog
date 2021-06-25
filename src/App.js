import React from "react";
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import AddBlog from './Components/AddBlog/AddBlog'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/addBlog'>
            <AddBlog />
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
