import React from "react";
import Input from "./Input";
import Container from "./tabsContainer";



class Header extends React.Component {
  render() {
    return (<div className="name">
        <header className="header">
        <div className="head">
          <h1>Search for books</h1>
        </div>

        <Input />

        <Container />
      </header>
    </div>
  
    )
  }
}


export default Header;
