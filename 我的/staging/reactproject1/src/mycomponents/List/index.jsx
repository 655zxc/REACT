import React, { Component } from "react";
import Item from '../Item'


export default class List extends Component {
  state = {
    data: [
      { name: "1", isDone: false ,id:"1"},
      { name: "2", isDone: false ,id:"2"},
    ],
  };

  render() {
    return (
      <div>
        {this.state.data.map((p) => {
          return <Item listData={p} key={p.id}/>;
        })}
      </div>
    );
  }
}
