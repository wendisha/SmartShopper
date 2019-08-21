import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
class SearchContainer extends React.Component {
  // state = {
  //   value: '',
  // }
  //
  // handleChange = event => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // }

  render() {
    return (
      <form>
        <div>
          <Button color="primary" size="sm">Search</Button>{' '}
           <label>
                <input id="searchterm" name="searchterm" type="text" placeholder="Search Item"/>
              </label>
          </div>
         </form>
    );
  }
}

export default SearchContainer;
