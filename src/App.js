import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import Search from './components/Search';
import * as api from './api/booksAPI';

import './App.css';

class App extends Component {

  state = {
    books: [],
  };

  async componentDidMount() {
   const res = await api.getAll();
      this.setState({
        books: res,
      });
  
  }

  shelfChange = (book, e) => {
    return new Promise(resolve => {
      api.update(book, e.target.value).then(res => {
        api.getAll().then(res => {
          this.setState({ books: res },
            resolve(res)
          );
        });
      });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="App">

        <Route
          exact
          path="/"
          render={() => (
            <>
            <div className="list_books">
              <div className="app_header">
                <h1>MyReads</h1>
              </div>
              <Bookshelf
                type="Currently Reading"
                books={books.filter(book => book.shelf === 'currentlyReading')}
                onChangeShelf={this.shelfChange}
              />
              <Bookshelf
                type="Want to Read"
                books={books.filter(book => book.shelf === 'wantToRead')}
                onChangeShelf={this.shelfChange}
              />
              <Bookshelf
                type="Read"
                books={books.filter(book => book.shelf === 'read')}
                onChangeShelf={this.shelfChange}
              />
            </div>
            <div className="add_book">
              <Link to="/search">Add Book</Link>
            </div>
            </>
          )} />
        <Route
          path="/search"
          render={() => <Search shelvedBooks={books} onChangeShelf={this.shelfChange} />}
        />
      </div>
    );
  }
}

export default App;
