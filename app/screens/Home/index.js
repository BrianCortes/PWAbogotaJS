import React from 'react';
import Input from 'Components/Input';
import './styles.sass';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="pwa-container">
        <div className="pwa-content">
          <h1>Welcome to BogotaJS</h1>
          <p>Search:</p>
          <Input />
        </div>
      </div>
    );
    // localhost:8080
    // [ Buscador [ .. ] ]

    // localhost:8080/orgs/colombia.dev
    // [ Cards [ [card] | [card] | [card] |] ]
  }
}

export default Home;
