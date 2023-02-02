import React, { Component } from 'react'


export default class Item extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return( 
        <div>
            {this.props.listData.name},{this.props.listData.isDone+""}
        </div>
        )
    }
}