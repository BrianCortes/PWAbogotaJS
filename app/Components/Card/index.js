import React from 'react';
import Image from 'Components/Image';
import ReactLoading from 'react-loading';
import Api from 'api';
import './styles.sass';

class Card extends React.Component {
  state = {
    infoUser: undefined,
    followers: 0,
    goBack: false,
  };
  flip = async () => {
    const { goBack } = this.state;
    const { profile } = this.props;
    if (!goBack) {
      var card = document.getElementById('card');
      this.card.classList.toggle('flipped');
      debugger;
      try {
        debugger;
        const value1 = await Api.getByUrl(profile.url);
        debugger;
        return value1;
      } catch (err) {
        console.error(err);
      }
    }
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
            <Image image={profile.avatar_url} />
            <span>Nick:</span>
            <h3>{profile.login}</h3>
          </figure>
          <figure className="back">
            {this.state.infoUser ? (
              <h1>hello</h1>
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
