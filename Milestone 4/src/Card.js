import  React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
 export default class Card extends Component{
     render(){
         return(
             <div className='col11 col-md-6'>
                 <div class="card p-0 overflow">
                     <p class="card.txt">
                         <Route>
                             <Link to={this.props.link} class="btn btn-primary">Details</Link>
                         </Route>
                     </p>
                 </div>
             </div>
         )
     }
 }