// export function fetchSearchItem() {
//   return (dispatch) => {
//     dispatch({ type: '' });
//     return fetch('https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`')
//       .then(response => response.json())
//       .then(items => dispatch({ type: 'SEARCH_ITEMS', cats }));
//   };
// }
export function fetchTopSearches() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_TOP_SEARCHES' });
    return fetch('http://api/v1/top_searches)
      .then(response => response.json())
      .then(top_searches => dispatch({ type: 'FETCH_TOP_SEARCHES', top_searches }));
  };
}
