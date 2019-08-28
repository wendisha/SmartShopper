import React from 'react'
import { Link } from "react-router-dom";
import './newstyle.css'
import Arrow from './Arrow'



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
      <div className="arrow-prev">
        </div>
      <div className="menu-item" style={styles}>
       {Arrow}
      <Link to={`${product_title}`} activeClassName="active">{product_title}</Link>
        </div>

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
