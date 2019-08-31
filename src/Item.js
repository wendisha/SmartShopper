import React from 'react'

import { Link } from "react-router-dom";
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

//
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
            <Route exact path={`/${product_id}`} render={()=><ProductDetail product_id={product_id}/>}/>
    </div>
      </Router>
  );
}
// // //
const Item = ({ items }) =>  <div className="menu-list">{items.map(ItemDetail)} </div>;

 // const Item = ({ items }) =>  {
 //    return (
 //   <div className="menu-item">
 //     {items.map(function(item) {
 //         return (
 //         <h4 key={item.product_id} product_title={item.product_title}> </h4>
 //       )
 //     })}
 //   </div>
 //  )
 // }

// function Item({items}) {
//     const itemcomponents = items.map(item => <h3 key={item.product_id} product_title={item.product_title}/>)
//
//     return (
//         <div>
//             {product_title}
//         </div>
//     )
// }




export default Item
