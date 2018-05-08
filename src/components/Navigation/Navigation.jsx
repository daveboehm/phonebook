import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navigation.css'

const navigation = props => (
    <nav className={ classes.Navigation }>
        <ul>
            <li><Link to="/" exact>Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/create">Create New</Link></li>
        </ul>
    </nav>
)

export default navigation