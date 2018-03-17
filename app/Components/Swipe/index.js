import React from 'react';
import ReactSwipe from 'react-swipe';
import Card from 'Components/Card';
import enquire from 'enquire.js';
import './styles.sass';

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSwipe: false,
    };
  }
  componentWillMount() {
    enquire.register('screen and (max-width:768px)', {
      // OPTIONAL
      // If supplied, triggered when a media query matches.
      match: () => {
        this.setState({ showSwipe: true });
      },
      unmatch: () => {
        this.setState({ showSwipe: false });
      },
    });
  }
  renderReactSwipe = profiles => (
    <ReactSwipe swipeOptions={{ continuous: false }}>
      {profiles.map(profile => (
        <div key={profile.id}>
          <Card profile={profile} />
        </div>
      ))}
    </ReactSwipe>
  );
  renderNormalComponent = profiles => (
    <div className="pwa-container-cards">
      {profiles.map(profile => <Card profile={profile} key={profile.id} />)}
    </div>
  );
  render() {
    const { showSwipe } = this.state;
    const { profiles } = this.props;
    return showSwipe
      ? this.renderReactSwipe(profiles)
      : this.renderNormalComponent(profiles);
  }
}

export default Swipe;
