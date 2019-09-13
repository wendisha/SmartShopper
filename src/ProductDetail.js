import React from 'react'
import { Button} from 'reactstrap';


const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;

class ProductDetail extends React.Component {
    state = {
      itemDetails: []
  };

// componentDidMount(){
//   fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
//   .then(response => response.json())
//     // console.log(response.json())
//   .then(jsonResp => this.setState({product_details: jsonResp.data.main_specs}));//
//   console.log('state', this.state.product_details)
//   //set state to jsoResp
// }

       // console.log('product detail', productdetail);



  // handleClick= event =>{
  //   event.preventDefault();
  // fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log(jsonResp.data.main_specs));
  // // };
  // handleClick= event =>{
  // fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log(jsonResp.data));
  // };




  // handleClick = event =>{
  //  fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => jsonResp.data.specs.join(""));
  // };
    // {item.product_title} <br/> &nbsp; <img src={item.product_image}/>

    // {this.state.itemDetails.map((itemDetailObj, index) => (
    //   <p>
    //     <tr>
    //       {itemDetailObj.main_specs}

 render() {
    {this.state.itemDetails = this.props.itemDetails}
     console.log('state', this.state.itemDetails)
     // console.log('props', this.props.itemDetails)
        return(
          <div>

           </div>
        )
    }
}

export default ProductDetail
