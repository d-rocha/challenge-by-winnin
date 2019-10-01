import React, { Component } from 'react';
import moment from 'moment';
import credentialReddit from '../../service/data';
import Header from "../Header";
import Button from '../Button';

//Importando os estilos do componente
import { ContainerBox, ContainerButtons, ContainerList } from './style';

const thumbnailImg = require('../../assets/thumbnail.png');

const status = { active: '#ff5500', inactive: '#666666' }
const colors = { hot: '', news: '', rising: '' }

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

  componentDidMount() {
    this.getHot();
  }

  //Função que verifica a chamada da categoria a partir do Proxy e
  //retorna as 10 primeiras postagens
  getData = async params => {
    try{
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
    }catch (err){
      console.log(err)
    }
  }

  //Funções que são chamadas a partir dos botões clicados e guardam
  //o estado da categoria em 'sort' para ser usada no botão '+Ver mais'
  getHot = () => {
    colors.hot = status.active
    colors.news = status.inactive
    colors.rising = status.inactive
    this.getData('hot').then(data => {
      this.setState({
        articles: data,
        sort: 'hot'
      })
    })
  }

  getNews = () => {
    colors.hot = status.inactive
    colors.news = status.active
    colors.rising = status.inactive
    this.getData('new').then(data => {
      this.setState({
        articles: data,
        sort: 'new'
      })
    })
  }

  getRising = () => {
    colors.hot = status.inactive
    colors.news = status.inactive
    colors.rising = status.active
    this.getData('rising').then(data => {
      this.setState({
        articles: data,
        sort: 'rising'
      })
    })
  }

  //Função que é chamada a partir do botão "+Ver mais",
  //compara o estado do último botão clicado e traz mais 15 postagens.
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
    }
  }

  render() {
    return (
      <ContainerBox>
        <Header/>
        <ContainerButtons>
            {/* Botões fazendo as chamadas dos métodos */}
            <Button onClick={this.getHot} style={{ backgroundColor: colors.hot}}/>
            <Button onClick={this.getNews} style={{ backgroundColor: colors.news }}>NEWS</Button>
            <Button onClick={this.getRising} style={{ backgroundColor: colors.rising }}>RISING</Button>
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
                <small>enviado {moment.unix(article.created).fromNow()} </small>
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
