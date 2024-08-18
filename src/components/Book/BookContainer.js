import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBooks } from "../../Store/bookSlice";

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isLoading, books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  useEffect(() => {
    // Reset selected book when books are updated (e.g., after insert or delete)
    setSelectedBook({});
  }, [books]);
  const getBookId = (id) => {
    const selected = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selected };
    });
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row con">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} isLoading={isLoading} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
