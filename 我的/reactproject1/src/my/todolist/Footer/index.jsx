import React, { Component } from 'react'
import { Button} from 'antd';
import './index.css'

export default class Header extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return( 
        <div className = "footer-container">
            <Button type="primary" onClick={this.props.deleteItem}>删除</Button>
        </div>
        )
    }
}