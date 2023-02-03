import React, { Component } from 'react'
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Header extends Component {
    inputRef = React.createRef()

    constructor(props){
        super(props)

        this.state = {
            inputValue:""
        }
    }


    enter = ()=>{
        this.props.addItem({name:this.inputRef.current.input.value,isDone:false,id:uuidv4()})
        this.state.inputValue = "" 
    }

    change = (e)=>{
        this.setState({inputValue:this.state.inputValue+e.nativeEvent.data})
    }

    render(){
        return( 
        <div className="header-container">
            <Input placeholder="Basic usage" ref={this.inputRef} onPressEnter={this.enter} value={this.state.inputValue} onChange={this.change}/>
        </div>
        )
    }
}