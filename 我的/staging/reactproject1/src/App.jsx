import React, { Component } from 'react'
// import Header from './mycomponents/Header'
import List from './mycomponents/List'
// import Footer from './mycomponents/Footer'
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div className="todo-container">
				<List />
			</div>
		)
	}
}
