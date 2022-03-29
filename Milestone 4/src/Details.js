import React, {Component} from 'react';
import data from "/..data";

export default class Details extends Component{
    render(){
        let getId = this.props.match.params.id;
        const getData = data.cardData[getId-1];
        console.warn(getData);
        return(
            <div>
                <h1> Blog Details</h1>
            </div>
        )
    }
}