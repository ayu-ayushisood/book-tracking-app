import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
	state = {
		isUpdating: false
	};

	componentWillReceiveProps() {
		this.setState({
			isUpdating: false
		});
	}

	changeShelf = event => {
		this.props.onChangeShelf(this.props.book, event);
		this.setState({
			isUpdating: true
		});
	};

	render() {
		return (
			<div className={this.state.isUpdating ? 'dropdown_select loading' : 'dropdown_select'}>
				<select value={this.props.book.shelf} onChange={event => this.changeShelf(event)}>
					<option value="move" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
				{this.state.isUpdating && <div className="loader-two" />}
			</div>
		);
	}
}

BookShelfChanger.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeShelf: PropTypes.func.isRequired
};

export default BookShelfChanger;