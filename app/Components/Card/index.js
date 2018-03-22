import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'Components/Image';
import ReactLoading from 'react-loading';
import JSImage from 'assest/bogotaJS.png';
import Open from 'assest/checked.png';
import Close from 'assest/error.png';
import Api from 'api';
import './styles.sass';

class Card extends React.Component {
  state = {
    infoUser: undefined,
    followers: 0,
    goBack: false,
  };
  componentDidMount() {
    if (typeof Notification != 'undefined') {
      Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
      });
    }
  }
  flip = async () => {
    const { goBack } = this.state;
    const { profile } = this.props;
    if (!goBack) {
      var card = document.getElementById('card');
      this.card.classList.toggle('flipped');
    }
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'welcome bogota Js',
          icon: JSImage,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
          },
          actions: [
            {
              action: 'explore',
              title: 'Explore this new world',
              icon: Open,
            },
            {
              action: 'close',
              title: 'Close notification',
              icon: Close,
            },
          ],
        };
        reg.showNotification('welcome bogota Js', options);
      });
    }

    this.setState({ infoUser: 'push' });
  };
  render() {
    const { profile } = this.props;
    return (
      <section className="container">
        <div
          id="card"
          ref={card => {
            this.card = card;
          }}
          onClick={this.flip}
        >
          <figure className="front">
            <LazyLoad height={200} offset={500}>
              <Image image={profile.avatar_url} />
            </LazyLoad>
            <span>Nick:</span>
            <h3>{profile.login}</h3>
          </figure>
          <figure className="back">
            {this.state.infoUser ? (
              <h1>😍</h1>
            ) : (
              <ReactLoading type="bubbles" height="200px" width="200px" />
            )}
          </figure>
        </div>
      </section>
    );
  }
}

export default Card;
