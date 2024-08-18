import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  return (
    <Fragment >
      <h2>Book Details</h2>
      {Object.keys(info).length > 0 ? (
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
