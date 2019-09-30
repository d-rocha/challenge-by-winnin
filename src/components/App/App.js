import React from "react";
import ArticleList from '../ArticlesList'

//Importando estilo global do app
import GlobalStyle from '../../styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ArticleList/>
    </div>
  );
}

export default App;
