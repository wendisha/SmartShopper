import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import './newstyle.css'

const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

class Menubar extends React.Component {
  render() {
    return (
      <div className="menu-bar">
        <ComponentSlider
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
          <div className="menu-item">The</div>
          <div className="menu-item">Quick</div>
          <div className="menu-item">Brown</div>
          <div className="menu-item">
            <i className="fa fa-firefox" aria-hidden="true" />
          </div>
          <div className="menu-item">Jumps</div>
          <div className="menu-item">Over</div>
          <div className="menu-item">The</div>
          <div className="menu-item">Lazy</div>
          <div className="menu-item">Dog</div>
        </ComponentSlider>
      </div>
    );
  }
}

export default Menubar;
