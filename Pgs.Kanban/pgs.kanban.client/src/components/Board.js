import React from 'react';
import List from './List';
import FakeData from '../FakeData'
import './Board.css';

export default class Board extends React.Component {

    constructor(){
        super();
        this.state = {
            boardName: 'Best board ever!',
            boardData: [],
        }
    }

    componentDidMount(){
        this.setState({boardData: FakeData })
    }
    
    renderLists = () => {
        return(
            this.state.boardData.map(
                (list) => 
                <List listName = { list.listName} cards={list.cards} />
            )
        )
    }

    render(){
        return(
            <div>
                 <div>
                  { //wasy w render oznaczaja ze uzywam javasript
                     this.state.boardName
                    }
                    <button className = "btn btn-info">Add new list</button>
                    <input/>
                </div>
                <div className="container-fluid">
                
                    <div className = "row flex-row flex-nowrap">
                    {this.renderLists()}
                    </div>
                    
                
                </div>
               
                
            </div>
        )
    }
}