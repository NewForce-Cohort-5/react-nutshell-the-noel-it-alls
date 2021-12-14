import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell'
import './index.css'
import Logo from './components/Logo'

ReactDOM.render(
  <Router.StrictMode>
      <Logo />
      <Nutshell />
  </Router.StrictMode>
  , document.getElementById('root'))
