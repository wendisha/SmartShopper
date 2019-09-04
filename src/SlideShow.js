import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlideShow.css'
import Image1 from './assets/6s_pure_gold.jpg';
import Image2 from './assets/grey_1.jpg'
import Image3 from './assets/image3.webp'
import Image4 from './assets/image4.jpg'




const slideImages = [
  Image1,
  Image2,
  Image3,
  Image4
]


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default SlideShow
