import React from "react";
import "./App.css";

import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <main>
      <h1>Some Simple Title</h1>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
    </main>
  );
}

export default App;
