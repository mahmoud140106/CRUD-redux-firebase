import React, { Fragment } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
};

export default App;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC4zMl-LBGq3UezToKgib0rQI55MvbUU64",
//   authDomain: "crud-books-redux.firebaseapp.com",
//   projectId: "crud-books-redux",
//   storageBucket: "crud-books-redux.appspot.com",
//   messagingSenderId: "185052986626",
//   appId: "1:185052986626:web:f7d8861aee686fd060d61b",
//   measurementId: "G-1GNC5ZN8P3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);