import React from 'react'
import ComponentSlider from "@kapost/react-component-slider";
import './newstyle.css'

const renderRightArrow = () => <i className="fa fa-caret-right" />;

const renderLeftArrow = () => {
  if (this.state.marginLeft !== 0) {
    return (
      <button className="caret caret-left" onClick={this.handleLeftClicked}>
        {this.props.renderLeftArrow()}
      </button>
    );
  }
  return null;
 }

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "50px"
};

const ItemDetail = ({
  product_id,
  product_title,
  product_link,
  product_image,
  product_lowest_price
}) => {

  return (
    <div className="menu-bar">
      <ComponentSlider
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
      <div className="menu-item" style={styles}> {product_title} </div>
        </ComponentSlider>
    </div>
  );
}

const Item = ({ items }) => <div className="menu-list">{items.map(ItemDetail)}</div>;



Item.defaultProps = {
  product_id:'ZToxMjIyNA',
  product_title:'Apple iPhone 6 32GB',
  produut_link: 'https://price-api.datayuge.com/api/v1/compare/detail?id=ZToxMjIyNA',
  product_image: 'http://images-api.datayuge.in/image/MTIyMjQtMjYtMQ.jpg',
  product_lowest_price: '26490'
}

export default Item
