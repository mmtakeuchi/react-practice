import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/books" >Books</Link>
                <Link to="/books/new" >Book Form</Link>
            </div>
        )
    }
}

export default Nav
