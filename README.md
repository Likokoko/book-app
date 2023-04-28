# [Booklist App](https://book-app-sigma.vercel.app/)

A book search list that fetches book information from Google Books API and displays the results in a list.

## Installation

Install my-project with npm

```bash
  npm install book-app
  npm start
```
## API Reference

#### Get items

```http
 https://www.googleapis.com/books/v1/volumes?q=${query}&
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `maxResults=` | `string` | **Required**. numbers of books |
