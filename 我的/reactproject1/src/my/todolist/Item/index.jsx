import React, { Component } from 'react'
import "./index.css"
import { Checkbox } from 'antd';


export default class Item extends Component {
    constructor(props){
        super(props)
        
    }

    onChange = (e)=>{
        this.props.changeItem(e.target.checked,this.props.listData.id)
    }

    render(){
        return( 
        <div className='item'>
            <Checkbox onChange={this.onChange} checked={this.props.listData.isDone}></Checkbox>
            {this.props.listData.name},{this.props.listData.isDone+""},{this.props.listData.id}
        </div>
        )
    }
}