import React from 'react';
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import Nav from './Components/Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends React.Component {
  state = {
    books: []
  }

  addBook = book => {
    this.setState({
      books: [...this.state.books, book]
    })
  }
  

  render() {
    return (
      <Router>
        <Nav />
        <div className="App">
            <h1>BookStore</h1>
        <Route exact path="/books/new" render={props => <BookForm {...props} addBook={this.addBook} /> } />
        <Route exact path="/books" render={props => <BookList {...props} books={this.state.books} /> } />
        </div>
      </Router>
      
    );
  }
  
}

export default App;