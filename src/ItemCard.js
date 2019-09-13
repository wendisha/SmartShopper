import React from 'react'
import Item from './Item.js'
import ProductDetail from './ProductDetail'
import './Item.css'



class ItemCard extends React.Component {
  state = {
    items: [],
    itemDetails: []
  };

  render (){
      {this.state.items = this.props.items}
      {this.state.itemDetails = this.props.itemDetails}
      // console.log('state', this.state.items)
      console.log('itemDetails', this.state.itemDetails)
     return (
        <div>
           <div className="front-card">
           <Item items={this.state.items}/>
             </div>
           <ProductDetail itemDetails={this.state.itemDetails}/>
        </div>

     );

  }


}




export default ItemCard
