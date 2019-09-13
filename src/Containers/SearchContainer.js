import React from 'react'
import { Button} from 'reactstrap';
import Item from '../Item'
import '../App.css'
import ProductDetail from '../ProductDetail'
import ItemCard from '../ItemCard'
import '../Item.css'
// import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";


const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;


class SearchContainer extends React.Component {
  state = {
    searchTerm: '',
    items: [],
    itemDetails: []

  };


    handleSearchInputChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }



  handleSubmit= event =>{
    event.preventDefault();

  fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())

    .then(jsonResp => this.setState({items: jsonResp.data}));

  };

 generateItemDetail(){
   {this.state.items.map((item, index) => (
     fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${item.product_id}`)
     .then(response => response.json())
       // console.log(response.json())
     .then(jsonResp => this.setState({itemDetails: jsonResp.data.main_specs}))
    ))}

}
 //generateItemDetail
// map thru item array and for each item id append the item deails to the itemdeail array
// this.state.ItemDetail.push = whatever u get from the secon api for a give itemi

  render() {
    {this.generateItemDetail()}
    const arr = [ <br />, <br/>];
    // Generate Item deail array( call function)
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
            <input id="searchterm" name="searchterm" type="text" placeholder="Search Item"  onChange={this.handleSearchInputChange}/>
             <Button type="submit" color="primary"  className="text-center" size="sm">Search</Button>
              <p>{arr}</p>

         </form>
            <ItemCard items={this.state.items} itemDetails={this.state.itemDetails} className="item-front" />
        </div>
    );
  }
}


export default SearchContainer;
