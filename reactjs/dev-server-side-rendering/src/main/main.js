import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'


if (typeof window !== 'undefined') {
    ReactDOM.hydrate(<Layout />, document.getElementById('app'))
}