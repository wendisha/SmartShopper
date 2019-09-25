import React from 'react'
import { connect } from 'react-redux'
// import '../reducers/top_search.js'
import {fetchTopSearches} from './actions/fetchTopSearches.js'




class TopSearches extends React.Component {

  componentDidMount(){
    {console.log('inside did mount')}
    this.props.fetchTopSearches()

  }

  render() {
         return(
           <div>
                  // {console.log('topsearches', this.props.topSearches)}
                  {this.props.topSearches && this.props.topSearches.map((top_search, index) => (
                        <tr>
                            <td>{top_search}</td>
                            <p> &nbsp;</p>
                      </tr>
                  ))}

           </div>

       )
     }

  }

const mapStateToProps = state => {
  return (
    {topSearches: state.topSearches}
  )
}

export default connect(mapStateToProps, {fetchTopSearches})(TopSearches)
