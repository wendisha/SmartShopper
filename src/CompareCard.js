import React from 'react'
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

 class CompareCard extends React.Component {
     state = {
       product_compare: []
   };

   productCompare(){

    fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
      .then(response => response.json())
        // console.log(response.json())
      .then(jsonResp => this.setState({product_compare: jsonResp.data.stores}));//
      console.log('state', this.state.product_compare)
      //set state to jsoResp

      // console.log('product detail', productdetail);
    };

  render() {
       {this.productCompare()}
         return(
           <div>
             Product Compare

           </div>
         )
     }
 }



 export default CompareCard
