import React from 'react';
import Menu from 'Components/Menu';
import Profile from 'Components/Profile';
import Swipe from 'Components/Swipe';
import Organization from 'Components/Organization';
import Input from 'Components/Input';
import Button from 'Components/Button';
import Api from 'api';
import './styles.sass';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
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
    Api.getFacebookMembers('facebook/members')
      .then(res => {
        this.setState({ data2: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  callOtherOrganitation(value) {}

  render() {
    const { data, data2 } = this.state;
    debugger;
    return (
      <div className="pwa-container">
        <div className="pwa-header">
          <Profile />
          <Menu />
          <h1>Welcome to BogotaJS</h1>
        </div>
        {this.state.data.length > 0 ? <Swipe profiles={data} /> : null}
        {data2.length > 0 ? <Organization members={data2} /> : null}
      </div>
    );
  }
}

export default Home;
