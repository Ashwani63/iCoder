import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'jquery'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'

let element = (
    <Router>
        <App/>
    </Router>
);

ReactDom.render(element,document.getElementById('root'));