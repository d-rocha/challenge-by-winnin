import React from "react";

import Header from "../Header";
import ArticleList from '../ArticlesList'

//Importando estilo global do app
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
