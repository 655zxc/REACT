import React, { Component } from 'react'
// import Header from './mycomponents/Header'
import List from './my/todolist/List'
// import Footer from './mycomponents/Footer'
import './App.css'

import 'antd/dist/reset.css';
//重置部分常见样式


export default class App extends Component {
	render() {
		return (
			<div className="todo-container">
				<List />
			</div>
		)
	}
}
