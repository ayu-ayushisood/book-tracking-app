import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as api from '../api/booksAPI';

class Search extends Component {
	state = {
		query: '',
		searchedBooks: [],
		isSearching: false,
		error: false
	};

	updateQuery = event => {
		this.setState({ query: event.target.value }, () => {
			this.searchBooks(event);
		});
	};

	searchBooks = () => {
		const { query } = this.state;

		if (query) {
			this.setState({ isSearching: true });
			api.search(query).then(res => {
				if (res.error) {
					this.setState({ searchedBooks: [], isSearching: false, error: true });
				} else if (res) {
					this.setState({ error: false });
					this.updateBooks(res);
				}
			});
		} else {
			this.setState({ searchedBooks: [] });
		}
	};

	updateBooks = books => {
		const { shelvedBooks } = this.props;
		for (const book of books) {
			book.shelf = 'none';
			for (let shelvedBook of shelvedBooks) {
				if (book.id === shelvedBook.id) book.shelf = shelvedBook.shelf;
			}
		}

		this.setState({
			searchedBooks: books,
			isSearching: false
		});
	};

	updateBook = books => {
		const {searchedBooks} = this.state;
		for (const book of searchedBooks) {
			for (const shelvedBook of books) {
				if (book.id === shelvedBook.id) book.shelf = shelvedBook.shelf;
			}
		}

		this.setState({ searchedBooks });
	};

	changeShelf = (book, event) => {
		this.props.onChangeShelf(book, event).then(books => this.updateBook(books));
	};

	render() {
		const { searchedBooks } = this.state;

		return (
			<div className="search">
				<div className="search_bar">
					<Link to="/" className="back">
						Close
					</Link>
					<div className="input_container">
						<input
							type="text"
							value={this.state.query}
							placeholder="Search by title or author"
							onChange={event => this.updateQuery(event)}
						/>
					</div>
				</div>

				{ this.state.error && !this.state.isSearching && (
					<div className="results center">
						<h3>No Results Found</h3>
					</div>
				)}

				{this.state.isSearching ? (
					<div className="loader" />
				) : (
					<div className="results">
						<ol className="books_grid">
							{searchedBooks.map(book => (
								<Book key={book.id} book={book} onChangeShelf={this.changeShelf} />
							))}
						</ol>
					</div>
				)}
			</div>
		);
	}
}

Search.propTypes = {
	shelvedBooks: PropTypes.array.isRequired,
	onChangeShelf: PropTypes.func.isRequired
};

export default Search;