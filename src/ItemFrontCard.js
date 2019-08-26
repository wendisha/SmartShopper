import React from 'react'



export default class ItemFrontCard extends React.Component {

  render() {
    return (
      <div className="item-front-card" style={{backgroundImage: `url(${this.props.product_image})`}} />

    );
  }
}
