
export default function SearchReducer(state = {searches: []}, action) {
  switch (action.type) {

    case 'FETCH_SEARCHES':
      return {searches: action.payload}
    default:
      return state
  }
};
