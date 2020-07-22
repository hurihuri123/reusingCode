import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./components/header/headerComponent";
import { Footer } from "./components/footer/footerComponent";
import MainComponent from "./components/mainContent/mainBodyComponent";
import "./global.css";

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <span>hi im web with tsx</span>
      </main>
    );
  }
}

export default hot(App);
