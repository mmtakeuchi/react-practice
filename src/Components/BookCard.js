import React, { Component } from 'react'

export class BookCard extends Component {
    render() {
        return (
            <li>{this.props.title} - {this.props.author}</li>
        )
    }
}

export default BookCard
