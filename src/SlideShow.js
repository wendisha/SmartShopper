import React from 'react'
import { Fade } from 'react-slideshow-image';
import './SlideShow.css'


const fadeImages = [
  'assets/6s_pure_gold.jpg',
  'images/grey_1.jpg',
  'images/grey_2.ppg'
];


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}




export default SlideShow
