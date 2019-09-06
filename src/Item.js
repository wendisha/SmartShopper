import React from 'react'

import { Link } from "react-router-dom";
import About from './About'
import ItemFrontCard from './ItemFrontCard'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProductDetail from './ProductDetail'
import './newstyle.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";




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
     <MDBContainer>
      // <MDBCarousel activeItem={1} length={25} slide={true} showControls={true} showIndicators={true} multiItem>
         // <MDBCarouselInner>
          <MDBRow>
        <Router>
    <div className="menu-bar">
      <div className="menu-item"style={styles}>
        <MDBCard className="mb-2">
          <MDBCardImage className="img-fluid" src={product_image} />
  <Link to={`/${product_id}`} component={ProductDetail} activeClassName="active">{product_title}</Link>
    </MDBCard>
  <Route exact path={`/${product_id}`} render={()=><ProductDetail product_id={product_id}/>}/>
</div>

        </div>

      </Router>
       </MDBRow>
        // </MDBCarouselInner>
       // </MDBCarousel>
    </MDBContainer>
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
