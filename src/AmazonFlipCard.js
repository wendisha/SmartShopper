import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from '././lib';
import './App.css'

import Amazon from './assets/amazon.jpg';
import Ebay from './assets/ebay_store.png'
import Flipkart from './assets/flipkart_store.png'
import Infibeam from './assets/infibeam.jpg'
import ShopClues from './assets/Shopclues.png'
import TataCliq from './assets/TataCliq.jpg'
import Croma from './assets/croma.jpeg'



const FlippyStyle = {
  width: '200px',
  height: '300px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}


const AmazonCardContents = ({ children }) => (
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
        src={Amazon}
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

  const EbayCardContents = ({ children }) => (
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
          src={Ebay}
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

    const CromaCardContents = ({ children }) => (
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
            src={Croma}
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


class FlipCard extends Component {
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
            <AmazonCardContents>
              I flip horizontally with an event<br />
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
            </AmazonCardContents>
          </Flippy>
          <Flippy
            ref={(r) => this.flippyHorizontal = r}
            flipOnClick={false}
            style={FlippyStyle}
          >
          <AmazonCardContents>
            I flip horizontally with an event<br />
            <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
          </AmazonCardContents>
        </Flippy>
        </div>
      </div>
    );
  }
}

export default FlipCard;
