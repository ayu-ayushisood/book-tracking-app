import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';

const Book = props => {
    const {book, onChangeShelf} = props;
    const authors = book.authors === undefined ? 'Unknown Author' : book.authors.join(', ');
    return (
        <li>
            <div className="book">
                <img src={book.imageLinks.thumbnail}/>
                {book.title}
                by {authors}
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    // onChangeShelf: PropTypes.func.isRequired
}
export default Book;