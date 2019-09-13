import React from 'react'

import { Link } from "react-router-dom";
import About from './About'
import ItemFrontCard from './ItemFrontCard'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProductDetail from './ProductDetail'
import CompareCard from './CompareCard'
import './Item.css'


import './newstyle.css'

const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "50px"
};


// const ItemDetail = ({
//   product_id,
//   product_title,
//   product_link,
//   product_image,
//   product_lowest_price
// }) => {
//
//   return (
//    <Router>
//       <tr className="item-card">
//         <img src={product_image} />
//   <Link to={`/${product_id}`} component={ProductDetail}> Product Details </Link>
//   <Link to='/item' component={CompareCard}>Compare</Link>
//   <Route exact path={`/${product_id}`} render={()=><ProductDetail product_id={product_id}/>}/>
//   <Route exact path='/item' render={()=><CompareCard product_id={product_id}/>}/>
// </tr>
//    </Router>
//   );
// }

class Item extends React.Component {
  state = {
    items: [],
  };



  render() {
        const arr = [ <br />, <br/>];
        {this.state.items = this.props.items}
         {console.log('prop', this.props.items.length)}
         {console.log('length', this.state.items.length)}
         {console.log('items', this.state.items)}
    return (

        <div>

    {this.state.items.map((item, index) => (
      <p> {arr}
        <tr className="item-card"> {item.product_title} <br/> &nbsp; <img src={item.product_image}/></tr>
        </p>
    ))}
    </div>);

  }
}

  // <li> {item.product_id} {item.product_title} {item.product_image} </li>



// const Item = ( {items} ) =>  <div className="menu-list">
//     {items.map(ItemDetail)}
// </div>;

//
// function Item ({items}){
//    return <div> {items.map(ItemDetail)} </div>
// }



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
