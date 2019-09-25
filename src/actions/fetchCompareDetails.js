const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;

export function fetchProductDetails(product_id) {
   return (dispatch) => {
     fetch(BASE_URL.concat(product_id))
     .then(resp => resp.json())
     .then(product_detail_data => dispatch({
        type: 'FETCH_PRODUCT_DETAILS',
        payload: product_detail_data
     }))


   }
  // return (dispatch) => {
  //   fetch('http://localhost:3001/api/v1/top_searches')
  //     .then(response => response.json())
  //     .then(topSearches => dispatch({{
  //       type: 'FETCH_TOP_SEARCHES',
  //       payload: topSearches
  //     }})
  //   }
}
