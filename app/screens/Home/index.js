import React from 'react';
import Menu from 'Components/Menu';
import Profile from 'Components/Profile';
import Swipe from 'Components/Swipe';
import Input from 'Components/Input';
import Api from 'api';
import './styles.sass';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    Api.getOrgs('colombia-dev/members')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="pwa-container">
        <div className="pwa-header">
          <Profile />
          <Menu />
          <h1>Welcome to BogotaJS</h1>
        </div>
        <Input />
        {/* this.state.data.length > 0 ? <Swipe profiles={data} /> : null */}
        {/* <p>Search:</p> */}
      </div>
    );
  }
}

export default Home;
