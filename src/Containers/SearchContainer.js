import React from 'react'
import { Button} from 'reactstrap';
const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = "https://price-api.datayuge.com/api/v1/compare/search?" + `api_key=${priceYugeAPI_KEY}&product=`;

class SearchContainer extends React.Component {
  state = {
    searchTerm: '',
    items: []
  }


    handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit= event =>{
    event.preventDefault();

  fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())
      // console.log(response.json())
    .then(json => this.setState({ items: json.data}));
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input id="searchterm" name="searchterm" type="text" placeholder="Search Item"/>
                  <Button type="submit" color="primary" size="sm">Search</Button>{' '}
         </form>
        </div>
    );
  }
}


export default SearchContainer;
