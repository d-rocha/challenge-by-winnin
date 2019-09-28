import React from "react";

import Header from "../Header";
import ArticleList from '../ArticlesList'

import GlobalStyle from '../../styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ArticleList/>
    </div>
  );
}

export default App;
