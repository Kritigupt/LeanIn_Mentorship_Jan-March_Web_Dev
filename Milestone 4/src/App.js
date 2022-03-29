import React from 'react'
import'..node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
import Blog from './Blog';
import Details from './Details';

 function App() {
  return (
      <>
      <h1 >REACT JS</h1>
      <Router>
          <Link to="/blog">Go To Blog</Link>
          <Route path="/blog">
            <Blog/>
            </Route>
            <Route path="/details/:id" render={props=>(
              <Details{...props}/>

            )}>
            

          </Route>
      </Router>
      </>
    
  );
}
export default App;