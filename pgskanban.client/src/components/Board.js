import React from "react";
import List from "./List";
import { BASE_URL } from "../constants";
import { withRouter } from 'react-router-dom'
import axios from "axios";
import "./Board.css";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      boardName: "",
      boardId: 0,
      boardData: [],
      listName: ""
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/board").then(response => {
      console.log(response);
      this.setState({
        boardData: response.data.lists,
        boardName: response.data.name,
        boardId: response.data.id
      })
    }).catch(() => {
      this.props.history.push('/new');
  });
  }

  onChangeListName = (e) => {
    this.setState({ listName: e.target.value });
  }

  onClickList = (e) => {
    axios.post(BASE_URL+"/list", {boardid:this.state.boardId,Name: this.state.listName})
    .then((response) => {
      console.log(response);
      this.setState(prevState => {
        return {
          boardData: [...prevState.boardData, response.data],
          listName: ''
        }  
      
      });
    })
  }


  renderLists = () => {
    return this.state.boardData.map(list => (
      <List key={list.id} boardId={this.state.boardId} listId={list.id}
       listName={list.name} cards={[]} />
    ));
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.boardName}</h1>
          <button className="btn btn-info" onClick={this.onClickList} 
          disabled={!this.state.listName}>Add new list</button>
          <input type="text" value={this.state.listName} onChange={this.onChangeListName} className="listName__input" />
        </div>
        <div className="container-fluid">
          <div className="row flex-row flex-nowrap">{this.renderLists()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Board)