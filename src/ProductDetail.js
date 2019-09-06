import React from 'react'
import { Button} from 'reactstrap';

const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;

class ProductDetail extends React.Component {

  productDetailFunction(){
    return fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
      .then(response => response.json())
        // console.log(response.json())
      .then(jsonResp => console.log(jsonResp.data.main_specs));
  }
  // handleClick= event =>{
  //   event.preventDefault();
  // fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log(jsonResp.data.main_specs));
  // };

 render() {
        return(
          <div>
            Product Details
            {this.productDetailFunction()}
          </div>
        )
    }
}

export default ProductDetail
