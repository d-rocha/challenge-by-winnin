import React, { Component } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2'
import credentialReddit from '../../service/data';
import Button from '../Button';

//Importando os estilos do componente
import { ContainerBox, ContainerButtons, ContainerList } from './style';

const thumbnailImg = require('../../assets/thumbnail.png');

//Definindo o Proxy para as chamadas do subreddit reactjs
const apiData = credentialReddit.getSubreddit('reactjs')

export default class ArticleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      sort: ''
    }
  }

  //Função que verifica a chamada da categoria a partir do Proxy e
  //retorna as 10 primeiras postagens
  getData = async params => {
    if (params === 'hot') {
      params = await apiData.getHot({limit: 10})
    }
    if (params === 'new') {
      params = await apiData.getNew({limit: 10})
    }
    if (params === 'rising') {
      params = await apiData.getRising({limit: 10})
    }
    return params;
  }

  //Funções que são chamadas a partir dos botões clicados e guardam
  //o estado da categoria em 'sort' para ser usada no botão '+Ver mais'
  getHot = () => {
    this.getData('hot').then(data => {
      this.setState({
        articles: data,
        sort: 'hot'
      })
    })
  }

  getNews = () => {
    this.getData('new').then(data => {
      this.setState({
        articles: data,
        sort: 'new'
      })
    })
  }

  getRising = () => {
    this.getData('rising').then(data => {
      this.setState({
        articles: data,
        sort: 'rising'
      })
    })
  }

  //Função que é chamada a partir do botão "+Ver mais",
  //compara o estado do último botão clicado e traz mais 15 postagens.
  //Se params for vazio o método não é invocado
  viewMoreArticles = () => {
    const params = this.state.sort
    if (params !== '') {
      this.getData(params).then(amountCurrent => {
        amountCurrent.fetchMore({amount: 15}).then(article => {
          this.setState({
            articles: article
          })
        })
      });
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Você deve clicar em um dois botões acima primeiro!'
      })
    }
  }

  render() {
    return (
      <ContainerBox>
        <ContainerButtons>
          {/* Botões fazendo as chamadas dos métodos */}
          <Button onClick={this.getHot}/>
          <Button onClick={this.getNews}>NEWS</Button>
          <Button onClick={this.getRising}>RISING</Button>
        </ContainerButtons>

        <ContainerList>
          {/* Função que mapeia os dados carregados da api e popula a lista */}
          {this.state.articles.map(article => (
          <div key={article.id}>
            {/* Verifica se o thumbnail é vazio se for ele traz o thumbnail padrão
              senão, traz o thumbnail da api
            */}
              <img
                src={article.thumbnail === 'self'
                || article.thumbnail === 'default' ? thumbnailImg : article.thumbnail}
                alt="thumbnail"
              />
            <article>
              <strong>{article.title}</strong>
              <p>
                <small>enviado a {moment(article.created).fromNow()} </small>
                por
                <span> {article.author.name}</span>
              </p>
              <a href={article.url}>link</a>

            </article>
          </div>
          ))}
          {/* Botão que faz a chamada para carregar mais posts */}
          <Button onClick={this.viewMoreArticles}>+ Ver mais</Button>
        </ContainerList>
      </ContainerBox>
    );
  }
}
