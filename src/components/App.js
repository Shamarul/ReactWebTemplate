import React, { Component } from "react";
import "../App.css";
import MenuBar from "./MenuBar";
import Header from "./Header";
import HeadSlider from "./HeadSlider";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <MenuBar />
        <main id="page-wrap">
          <HeadSlider />
          <Content />
        </main>
      </div>
    );
  }
}

export default App;
