import React from "react";
import Header from "./components/header/header";
import Jumbotron from "./components/jumbotron/jumbotron";
import Statistics from "./components/statistics/statistics";
import "./App.scss";

function App() {
  return (
    <main>
      <Header />
      <Jumbotron />
      <Statistics />
    </main>
  );
}

export default App;
