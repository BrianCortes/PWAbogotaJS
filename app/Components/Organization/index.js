import React, { Component } from 'react';
import Card from 'Components/Card';
import './styles.sass';

class Organization extends Component {
  render() {
    const { members } = this.props;
    debugger;
    return (
      <div className="pwa-organization">
        {members.map(profile => (
          <div key={profile.id}>
            <Card profile={profile} />
          </div>
        ))}
      </div>
    );
  }
}

export default Organization;
