export function insertTopSearches() {
   return (dispatch) => {
     fetch('http://localhost:3001/api/v1/searches')
     .then(resp => resp.json())
     .then(search => dispatch({
        type: 'INSERT_SEARCH',
        payload: search
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
