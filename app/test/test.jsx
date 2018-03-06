import React from 'react';
import './styles.sass';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      <h1 className="brian">hola</h1>,
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
}

export default Square;
