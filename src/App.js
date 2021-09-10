import React, { useState, useEffect }  from 'react';
import { Route, Link } from 'react-router-dom';
import Bookshelf from './components/Bookshelf';
import * as api from './api/booksAPI';

import './App.css';

const App = props => {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    api.getAll().then(res => {
      setBooks(res);
    })
  });

  const changeShelf = () => {
    
  }
  
  return (
    <div className="App">
      <header className="app_header">
        <h1>MyReads</h1>
      </header>
      <div className="list_books">
          <Bookshelf 
            type="Currently Reading"
            books= {books.filter(book => book.shelf === 'currentlyReading')}
            onChangeShelf={changeShelf()}
          />
          <Bookshelf 
            type="Want to Read"
            books= {books.filter(book => book.shelf === 'wantToRead')}
            onChangeShelf={changeShelf()}
          />
          <Bookshelf 
            type="Read"
            books= {books.filter(book => book.shelf === 'read')}
            onChangeShelf={changeShelf()}
          />
        </div>
    </div>
  );
}

export default App;
