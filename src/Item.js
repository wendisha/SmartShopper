import React from 'react'
import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import About from './About'
import ItemFrontCard from './ItemFrontCard'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProductDetail from './ProductDetail'



import './newstyle.css'


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
        <Router>
    <div className="menu-bar">
      <div className="menu-item" style={styles}>
  <Link to={`/${product_id}`} activeClassName="active">{product_title}</Link>
        </div>
            <Route exact path={`/${product_id}`} component={ProductDetail} />
    </div>
      </Router>
  );
}
//

  const Item = ({ items }) =>  <div className="menu-list">{items.map(ItemDetail)}</div>;




Item.defaultProps = {
  product_id:'ZToxMjIyNA',
  product_title:'Apple iPhone 6 32GB',
  produut_link: 'https://price-api.datayuge.com/api/v1/compare/detail?id=ZToxMjIyNA',
  product_image: 'http://images-api.datayuge.in/image/MTIyMjQtMjYtMQ.jpg',
  product_lowest_price: '26490'
}

export default Item
