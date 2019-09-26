import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

import {
  ButtonStyled
} from './style'

export default class Button extends Component {
  static defaultProps = {
    children: 'HOT'
  }

  static propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    return (
      <ButtonStyled onClick={this.props.onClick}>
        {this.props.children}
      </ButtonStyled>
    );
  }
}
