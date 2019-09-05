import React from 'react'
import { Button} from 'reactstrap';

const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;



class ProductDetail extends React.Component {

  handleClick = event =>{
    event.preventDefault();

  fetch('https://price-api.datayuge.com/api/v1/compare/detail?'+ `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
    .then(response => response.json())
      // console.log(response.json())
    .then(jsonResp => console.log(jsonResp.data.available_colors.toString()));
  };

  handleAmazon = event =>{
     event.preventDefault();

    fetch('https://price-api.datayuge.com/api/v1/compare/detail?'+ `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
          .then(response => response.json())

          .then(jsonResp => console.log(jsonResp.data.stores[0].amazon.product_price));
    };




 render() {
        return(
            <div>
                <Button onClick={this.handleClick} type="submit" color="secondary" size="sm">Product Detail</Button>
                <Button onClick={this.handleAmazon}type="submit" variant= "primary"  color="primary" size="small">Compare</Button>
            </div>
        )
    }
}

export default ProductDetail
