import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from '././lib';

import TataCliq from './assets/TataCliq.jpg'

const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}

  const TataCliqCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor:'white',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img
          src={TataCliq}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        RICK
        <span
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
          (FRONT SIDE)
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        ROCKS
        <span
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
          (BACK SIDE)
        </span>
      </BackSide>
    </React.Fragment>);


class TataCliqCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <TataCliqCardContents>
              I flip horizontally with an event<br />
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
            </TataCliqCardContents>
          </Flippy>
        </div>
      </div>
    );
  }
}

export default TataCliqCard;
