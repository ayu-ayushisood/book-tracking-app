import React from 'react';
import SelectBook from './SelectBook';
import PropTypes from 'prop-types';

const Book = props => {
    const {book, onChangeShelf} = props;
    const authors = book.authors === undefined ? 'Unknown Author' : book.authors.join(', ');
    return (
        <li>
            <div className="book">
                <div className="top_section">
                    <img src={book.imageLinks.thumbnail} className="book_cover"/>
                    <SelectBook book={book} onChangeShelf={onChangeShelf}/>
                </div>
                <div className="title">{book.title}</div>
                <div className="authors">{authors}</div>
                
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}
export default Book;