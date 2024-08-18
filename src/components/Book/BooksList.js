import React from "react";

const BooksList = ({ isLoading, books, isLoggedIn, dispatch, deleteBook,getBookId }) => {
  const bookList =
    books.length > 0 ? (
      books.map((item) => (
        <li
          className="list-group-item d-flex  justify-content-between align-items-center"
          key={item.id}
        >
          <div className="mr-4">{item.title}</div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              // disabled={!isLoggedIn}
              onClick={()=>getBookId(item.id)}
            >
              Read
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={!isLoggedIn}
              onClick={() =>
                dispatch(deleteBook(item))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log(originalPromiseResult)
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                  })
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))
    ) : (
      <div className="alert alert-secondary" role="alert">
        There is no books available
      </div>
    );
  return (
    <div className="mb-4">
      <h2>Books List</h2>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className="list-group">{bookList}</ul>
      )}
    </div>
  );
};

export default BooksList;
