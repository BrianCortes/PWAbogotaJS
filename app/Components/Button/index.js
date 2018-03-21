import React, { Component } from 'react';
import './styles.sass';

class Button extends Component {
  render() {
    return (
      <input
        type="button"
        onClick={this.props.callOtherOrganitation}
        className="pwa-button"
        value="SEARCH"
      />
    );
  }
}

export default Button;
