import React from 'react'
import Item from './Item'

import { Button} from 'reactstrap';
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;



class ProductDetail extends React.Component {
  constructor(props) {
     super(props);
 }

 render() {
        return(
            <div>
                <Item />
            </div>
        )
    }
}

export default ProductDetail
