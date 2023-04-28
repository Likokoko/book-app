import React, { useState } from "react";
import styled from "styled-components";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setBooks(data.items);
      });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a
              href={book.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book" />
                <div>
                  <div>{book.volumeInfo.title}</div>
                  <div>Author: {book.volumeInfo.authors}</div>
                  <div>Publisher: {book.volumeInfo.publisher}</div>
                  <div>Price: {book.saleInfo.listPrice?.amount}</div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  font-family: sans-serif;

  h1 {
    font-size: 32px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    input[type="text"] {
      margin-right: 10px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-size: 16px;
      width: 400px;
      max-width: 100%;
    }

    button[type="submit"] {
      background-color: grey;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  ul {
    list-style: none;
    max-width: 800px;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
      transition: box-shadow 0.3s;
      width: 100%;
      height: 180px;
      flex-direction: row; /* add this property */

      &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      img {
        margin-right: 20px;
        width: 80px; /* reduce width */
        height: 120px; /* reduce height */
        object-fit: cover;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #222;
        font-size: 18px;
        padding: 20px;
        height: 100%;
        width: 100%;

        &:hover {
          text-decoration: underline;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        div {
          display: flex;
          flex-direction: column;
          position: relative;
          bottom:50px;
          left:70px;

          span {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }

        div:first-of-type {
          margin-bottom: 10px;
        }

        div:last-of-type {
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;

        img {
          margin-right: 0;
          margin-bottom: 10px;
        }

        div {
          margin-bottom: 10px;
        }

        div:last-of-type {
          margin-top: auto;
          text-align: center;
        }
      }
    }
  }
`;

export default BookSearch;
