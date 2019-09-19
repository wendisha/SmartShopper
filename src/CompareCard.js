import React from 'react'
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// {Object.values(this.state.product_compare).map((storeObj, index) => {
//   for (let key of Object.keys(storeObj)) {
//       let store = storeObj[key];
// // ... do something with mealName
//    // return <li> {store.product_price}, {store.product_store}</li>;
//    return <li> {store.product_price}, {store.product_store}</li>;
//  }
//    // return <p> {console.log('prices', Object.values(store))} </p>
//  })}

// 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`

 class CompareCard extends React.Component {
   state = {
     product_compare: [],
     objKeys: [],
   };

   componentDidMount(){
     console.log('inside did mount')
     console.log('prop', this.props.product_id)
     fetch('https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
       .then(response => response.json())
       .then(jsonResp => this.setState({product_compare: jsonResp.data.stores}));

    }


          // {this.state.product_compare.map((product_comp, index) => (
        //   {this.state.product_compare.map((product_compare, index) => (
        //       <tr>
        //           <td>{product_compare}</td>
        //           <p> &nbsp;</p>
        //     </tr>
        //
        // ))}

    render() {




           return(

             <div>
                {console.log("Inside return",this.state.product_compare)}

                <table>
                <th>Prices</th>
                {Object.values(this.state.product_compare).map((storeObj, index) => {
                    for (let key of Object.keys(storeObj)) {
                        console.log('key', key)
                        let store = storeObj[key];
                       console.log('store key', storeObj[key])
                    if(store.length === 0){
                       return <li> {key} No Data Available </li>;
                    }
              return <li> <strong> {store.product_store}, {store.product_price} </strong> </li>;
              // console.log('store name', store.product_store, 'price', store.product_price)
            }
          // return <p> {console.log('prices', Object.values(store))} </p>
        })}
                </table>

              )


             </div>

         )
     }

}


 export default CompareCard
