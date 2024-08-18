import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../Store/authSlice";
import { logInsert } from "../Store/reportSlice";
import Store from "../Store";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.books);
  const handleClick = () => {
    dispatch(logInOut());
    dispatch(
      logInsert({ name: isLoggedIn ? "logout" : "login", status: "success" })
    );
  };
  console.log('report',Store.getState().report.logs)
  return (
    <Fragment>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 mx-4 ">My Books</span>
        <button
          className="btn btn-outline-primary mx-4"
          type="submit"
          onClick={handleClick}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
