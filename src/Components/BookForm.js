import React, { Component } from 'react'

export class BookForm extends Component {
    state = {
        title: "",
        author: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addBook(this.state)

        this.props.history.push("/books")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.title} name="title"></input>            
                <input type="text" onChange={this.handleChange} value={this.state.author} name="author"></input> 
                <input type="submit" value="create book"></input>
            </form>
        )
    }
}

export default BookForm
