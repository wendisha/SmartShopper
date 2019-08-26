import React from 'react'
import { Button} from 'reactstrap';
import Item from '../Item'

const renderLeftArrow = () => <i className="fa fa-caret-left" />;
const renderRightArrow = () => <i className="fa fa-caret-right" />;

const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';
const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/search?' + `api_key=${priceYugeAPI_KEY}&product=`;




class SearchContainer extends React.Component {
  state = {
    searchTerm: '',
    items: []
  };


    handleSearchInputChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleSubmit= event =>{
    event.preventDefault();

  fetch(BASE_URL.concat(this.state.searchTerm))
    .then(response => response.json())
      // console.log(response.json())
    .then(jsonResp => this.setState({items: jsonResp.data}));
  };




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input id="searchterm" name="searchterm" type="text" placeholder="Search Item"  onChange={this.handleSearchInputChange}/>
                  <Button type="submit" color="primary" size="sm">Search</Button>
         </form>
              <Item items={this.state.items} />
        </div>
    );
  }
}


export default SearchContainer;
