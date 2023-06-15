import React from "react";
import Input from "./Input";
import Container from "./tabsContainer";
import BookList from "./BookList";

function Header() {
  return (
    <div className="name">
      <header className="header">
        <div className="head">
          <h1>Search for books</h1>
        </div>

        <Input />

        <Container />

      </header>

      <main>
        <BookList />
      </main>

    </div>
  );
}

export default Header;
