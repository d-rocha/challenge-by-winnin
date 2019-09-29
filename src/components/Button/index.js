import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

//Importando os estilos do componente
import {
  ButtonStyled
} from './style'

export default class Button extends Component {

  //Definindo propridade do botão padrão
  static defaultProps = {
    children: 'HOT'
  }

  //Definindo propriedades obrigatórias com propTypes
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <ButtonStyled onClick={this.props.onClick}>
        {this.props.children}
      </ButtonStyled>
    );
  }
}
