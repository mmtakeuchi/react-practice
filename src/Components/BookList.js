import React, { Component } from 'react'
import BookCard from './BookCard.js'

export class BookList extends Component {

    render() {
        const books = this.props.books.map((book, i) => < BookCard key={i} title={book.title} author={book.author} />)

        return (
            <ul>
                {books}
            </ul>
        )
    }
}

export default BookList
