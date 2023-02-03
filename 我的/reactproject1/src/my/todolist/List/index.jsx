import React, { Component } from "react";
import Item from '../Item'
import Header from '../Header'
import Footer from '../Footer'
import "./index.css"
import { v4 as uuidv4 } from 'uuid';


export default class List extends Component {
  state = {
    data: [
      { name: "1", isDone: false ,id:uuidv4()},
      { name: "2", isDone: true ,id:uuidv4()},
    ],
  };

  addItem=(value)=>{
    this.setState(pre=>({
        data:[...pre.data,value]
    }))
  }

  changeItem = (value,id)=>{
    //这里setState 应该不需要这么麻烦?
    let d = this.state.data.map(p=>{
        return {...p}
    })

    for(let key in d){
        if(d[key].id == id){
            d[key].isDone = value
        }
    }

    this.setState({data:d})
  }

  deleteItem = ()=>{
    let d = []

    this.state.data.forEach(p=>{
      if(!p.isDone){
        d.push(p)
      }
    })

    this.setState({data:d})
  }

  render() {
    return (
      <div className="container">
        <Header addItem={this.addItem}/>
        <div className="Items">
            {this.state.data.map((p) => {
            return <Item listData={p} key={p.id} changeItem={this.changeItem}/>;
            })}
        </div>
        <Footer deleteItem={this.deleteItem}/>
      </div>
    );
  }
}
