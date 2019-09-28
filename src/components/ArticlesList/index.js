import React, { Component } from 'react';
import credentialReddit from '../../service/data';
import Button from '../Button';

import { ContainerButtons, ContainerList } from './style';

const r = credentialReddit

export default class ArticleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: {
        title: '',
        created: '',
        author_fullname: '',
        url: '',
        thumbnail: ''
      }
    }
  }

  componentDidMount(){
    this.getHot();
  }

  getData = async () => {
    const res = await r.getSubreddit('reactjs').getHot()
    return res;
  }

  getHot = () => {
    this.getData().then(data => {
      console.log(data);
      this.setState({
        articles: data.submission.title
      })
    })
  }

  render() {
    return (
      <div className="containerBox">

        <ContainerButtons>
          <Button onClick={this.getHot}/>
          <Button>NEWS</Button>
          <Button>RISING</Button>
        </ContainerButtons>

      <ContainerList>

        <div>
          <img src="" alt="thumb" width="86px" height="86px"/>
        </div>

        <div>
          <ul>
            <li><h2>{this.state.articles.title}</h2></li>
            <li><p><small>{this.state.articles.created}</small> por <span>{this.state.articles.author}</span></p></li>
            <li><a href="#">{this.state.articles.url}</a></li>
            {/* <li><h2>Título da parada bem grande assim mais ou menos</h2></li>
            <li><p><small>enviado a 6 horas</small> por <span>usuário_nickname</span></p></li>
            <li><a href="#">dominio.io</a></li> */}
          </ul>
        </div>
      </ContainerList>
      </div>
    );
  }
}
