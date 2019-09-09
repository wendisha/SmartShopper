import React from 'react'
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

 class CompareCard extends React.Component {
   constructor() {
   super()
   this.state = { product_compare: [] }
 }

   componentDidMount(){
     let product_compare = [];
     fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
       .then(response => response.json())
         // console.log(response.json())
       .then(jsonResp => {console.log('jsonResp', jsonResp);
        this.setState({product_compare: jsonResp.data.stores})
      });

     }

     retrieveStoreInfo(array){
       {Object.values(this.state.product_compare).map((storeObj, index) => {
           for (let key of Object.keys(storeObj)) {
               let store = storeObj[key];
 // ... do something with mealName
          console.log('store name', store.product_store, 'price', store.product_price);
           }
            // return <p> {console.log('prices', Object.values(store))} </p>
          })}
     }

  render() {
    return (
      <div>
          {this.retrieveStoreInfo(this.state.product_compare)}
      </div>
    )
  }
}


 export default CompareCard
