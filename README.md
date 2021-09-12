# Udacity | MyReads: A Book Tracking App

# Deployment:
> https://ayu-ayushisood.github.io/book-tracking-app

## Installation

* `fork this repository`
* `git clone <repository-url>` this repository
* `cd book-tracking-app`
* `npm install`
* `npm run start`

## Backend Server

For backend server udacity provided a file [`BooksAPI.js`](src/api/BooksAPI.js) it contains the methods which will be needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Join the development:

* Before you start contributing, run the app on your local machine, get familiar with it and then check for bugs 
or more features.
* If you find any bug or want to add a new feature you have to open a new issue.
* If you would like to work on an existing issue, drop in a comment on the issue.
