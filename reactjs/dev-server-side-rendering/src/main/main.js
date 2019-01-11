import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import './main.scss'

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(<Layout />, document.getElementById('app'))
}