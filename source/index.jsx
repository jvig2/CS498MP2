import { BrowserRouter as Router, 
	Route, 
	Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { render } from 'react-dom'
import Home from './components/Home/Home.jsx'
import React from 'react'
require('./styles/main.scss')

render(
  <Home />,
  document.getElementById('app')
)
