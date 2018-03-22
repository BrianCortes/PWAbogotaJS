import React, { Component } from 'react';
import Card from 'Components/Card';
import './styles.sass';

class Organization extends Component {
  render() {
    const { members } = this.props;
    return (
      <div className="pwa-organization">
        {members.map(profile => <Card profile={profile} key={profile.id} />)}
      </div>
    );
  }
}

export default Organization;
