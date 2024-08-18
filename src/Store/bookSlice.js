import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      //   const response = await fetch("http://localhost:3000/books");
      //   const data = await response.json();
      //   return data;
      const querySnapshot = await getDocs(collection(db, "books"));
      const books = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return books;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      //   bookData.userName = getState().auth.name;
      //   const response = await fetch("http://localhost:3000/books", {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json; charset=UTF-8",
      //     },
      //     body: JSON.stringify(bookData),
      //   });
      //   const data = await response.json();
      //   dispatch(logInsert({ name: "insert book", status: "success" }));
      //   return data;
      bookData.userName = getState().auth.name;
      const docRef = await addDoc(collection(db, "books"), bookData);
      dispatch(logInsert({ name: "insert book", status: "success" }));
      return { id: docRef.id, ...bookData };
    } catch (error) {
      dispatch(logInsert({ name: "insert book", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      //   const response = await fetch(`http://localhost:3000/books/${item.id}`, {
      //     method: "DELETE",
      //     headers: {
      //       "Content-Type": "application/json; charset=UTF-8",
      //     },
      //   });
      //   dispatch(logInsert({ name: "delete book", status: "success" }));
      //   return item;
      await deleteDoc(doc(db, "books", item.id));
      dispatch(logInsert({ name: "delete book", status: "success" }));
      return item;
    } catch (error) {
      dispatch(logInsert({ name: "delete book", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      //getBooks
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //insertBook
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //deleteBook
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.books = state.books.filter((el) => el.id !== action.payload.id);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
