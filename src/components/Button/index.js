import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
