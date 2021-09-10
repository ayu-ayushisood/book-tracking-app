import React, { useState, useEffect }  from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Bookshelf = props => {
    const {type, books, onChangeShelf} = props;
    return (
        <div className="book_shelf">
            <h2>{type}</h2>
            {books.length <= 0 ? (
                <div className="empty">No books at present in this shelf.</div>
            ): (
                <ol className="books">
                    {books.map( book => (
                        <Book 
                            key={book.id}
                            book={book}
                            onChangeShelf={onChangeShelf}
                        />
                    ))}
                </ol>
            )}
        </div>
    )
}

Bookshelf.propTypes = {
    type: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    // onChangeShelf: PropTypes.func.isRequired
}
export default Bookshelf;
