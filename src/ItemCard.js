import React from 'react'
import Item from './Item.js'
import ProductDetail from './ProductDetail'
import './Item.css'

  // <Item items={this.state.items}/>
//<ProductDetail itemDetails={this.state.itemDetails}/>

class ItemCard extends React.Component {
  state = {
    items: [],
    itemDetails: []
  };

  render (){
      {this.state.items = this.props.items}
      {this.state.itemDetails = this.props.itemDetails}
      console.log('ItemCard-items', this.state.items)
      console.log('ItemCard-itemdetails', this.state.itemsDetails)

     return (
        <div>
           <Item items={this.state.items}/>
          <ProductDetail itemDetails={this.state.itemDetails}/>
        </div>

     );

  }


}




export default ItemCard
