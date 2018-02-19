import React from "react";
import { Component } from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";
import { Clock } from "./clock";
export default class App extends Component {
  render() {
   
    return (
      <div>
      <BodyBackgroundColor backgroundColor='lightblue'>
        <h1>Book Store</h1>
      </BodyBackgroundColor>
        <Clock />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}




