import React from 'react';
import SelectBook from './SelectBook';
import PropTypes from 'prop-types';

const Book = props => {
    const {book, onChangeShelf} = props;
    const authors = book.authors === undefined ? 'Unknown Author' : book.authors.join(', ');
    const thumbnail = book.imageLinks === undefined ? `https://dummyimage.com/120x220/000/fff.png&text=No+Thumbnail` : book.imageLinks.thumbnail; 
    return (
        <li>
            <div className="book">
                <div className="top_section">
                    <img src={thumbnail} className="book_cover"/>
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