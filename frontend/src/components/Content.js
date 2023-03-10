import React, { useState } from "react";
import Book from "./Book";
import "./Content.css";
import AddBookForm from "./AddBookForm";
import { Grid, Box, Typography } from "@mui/material";

const book = {
  title: "",
  author: "",
  image_url: "",
  published_year: "",
  description: "",
};
export default function Content({ books, handleAddToCollection ,setBooks, isAddBookFormOpen,setIsAddBookFormOpen}) {
  const [newBook, setNewBook] = useState(book);
  

  const handleCloseAddBookForm = () => {
    setIsAddBookFormOpen(false);
  }

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  }

  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const addNewBook = {
      ...newBook
    };
    setNewBook(book)
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewBook),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to add new book");
      })
      .then((newBookResponse) => {
        setBooks([newBookResponse, ...books ]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  return (
    <div className="content">
      <Box
        m={1}
        pt={3}
        sx={{
          display: "flex",
          height: "300",
          width: "350",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isAddBookFormOpen && (
  <AddBookForm
    newBook={newBook}
    handleFormSubmit={handleFormSubmit}
    handleInputChange={handleInputChange}
    closeModal={handleCloseAddBookForm}
    showModal={isAddBookFormOpen}
  />
)}
      </Box>
      <Box sx={{alignItems: "center"}}>
      <Typography  className="browse-books"variant="h2">Browse books</Typography>
      </Box>
      <Box m={2} pt={3}>
        <Grid
          m={2}
          pt={3}
          container
          spacing={4}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {books.map((book_data) => (
            <Book
              book={book_data}
              key={book_data.id}
              handleAddToCollection={handleAddToCollection}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
