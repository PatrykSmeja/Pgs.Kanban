import React, { Component } from 'react'; // nawiasy { } to import po nazwie
import './Card.css';
export default class Card extends Component{
    render(){
        return(
            <div className="card__container">
               {this.props.cardName}
            </div>
        )
        
        }
}