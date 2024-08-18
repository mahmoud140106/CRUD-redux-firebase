import React, { Fragment } from "react";

const BookInfo = ({ info, isLoading }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : Object.keys(info).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {info.title}</p>
          <p className="">Description: {info.description}</p>
          <p className="">Price: {info.price}</p>
          <p className="">Inserted By: {info.userName}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
