import React from 'react'
//import { Button} from 'reactstrap';
 import { Link, Route, Router,HashRouter } from "react-router-dom";
 


const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;
  // {this.state.product_details.main_specs}

class ProductDetail extends React.Component {
    state = {
      product_details: []

  };

  componentDidMount(){

    fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
    .then(response => response.json())
      // console.log(response.json())
    .then(jsonResp => this.setState({product_details: jsonResp.data.main_specs}));
      // this.setState({product_details: jsonResp.data.main_specs}));//
    // console.log('state', this.state.product_details)
    //set state to jsoResp

  }

//        // console.log('product detail', productdetail);



  // handleClick= event =>{
  //   event.preventDefault();
  // fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log(jsonResp.data.main_specs));
  // // };
  // handleClick= event =>{
  // fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => console.log(jsonResp.data));
  // };




  // handleClick = event =>{
  //  fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
  //   .then(response => response.json())
  //     // console.log(response.json())
  //   .then(jsonResp => jsonResp.data.specs.join(""));
  // };
    // {item.product_title} <br/> &nbsp; <img src={item.product_image}/>

    // {this.state.itemDetails.map((itemDetailObj, index) => (
    //   <p>
    //     <tr>
    //       {itemDetailObj.main_specs}
    // {this.state.itemDetails.map((itemDetail, index) => (
    //   <p> {arr}
    //     {console.log('index', index)}
    //     <tr className> itemDetails {itemDetail[index]} </tr>
    //     </p>
    // ))}

// <Route exact path={`/${this.props.product_id}`} render={()=><ProductDetail product_id={this.props.product_id}/>}/>
// <Route exact path={`/compare/`} render={()=><CompareCard product_id={this.props.product_id}/>}/>
 render() {



        return(

          <div>





              <table>
              <th>Main Specs </th>
                {this.state.product_details.map((product_detail, index) => (
                    <tr>
                        <td>{product_detail}</td>
                        <p> &nbsp;</p>
                  </tr>

              ))}
              </table>

          </div>

      )
  }


}



export default ProductDetail
