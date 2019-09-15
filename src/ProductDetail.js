import React from 'react'
//import { Button} from 'reactstrap';


const priceYugeAPI_KEY = 'fCBxRI3EUVk2kSMxPLkGYTcXpvPRfx1XN4C';

// const BASE_URL = 'https://price-api.datayuge.com/api/v1/compare/detail?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`;

class ProductDetail extends React.Component {
    state = {
      product_details: []
  };
  componentDidMount(){
    console.log("In Product Detail")
    fetch('https://price-api.datayuge.com/api/v1/compare/specs?' + `api_key=${priceYugeAPI_KEY}&id=${this.props.product_id}`)
    .then(response => response.json())
      // console.log(response.json())
    .then(jsonResp => this.setState({product_details: jsonResp.data.main_specs}));//
    console.log('state', this.state.product_details)
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

 render() {
   // const arr = [ <br />, <br/>];
   //   {this.state.itemDetails = this.props.itemDetails}
     //this.setState(this.state.itemDetails: this.props.itemDetails)
    // this.setState({this.state.itemDetails: this.props.itemDetails});
     // console.log('state', this.state.itemDetails)
     // console.log('props', this.props.itemDetails)
     //console.log('ItemDetails ProductDetail', this.state.itemDetails)
        return(
          <div>
          <p>
            <td>
              Product Details {this.props.product_id}

            </td>
           </p>
         </div>
      )
  }


}



export default ProductDetail
