import React from 'react'
import { connect } from 'react-redux'
import '../reducers/top_search.js'


// function TopSearches() {
//   return (
//     <div className="Categories">
//        Hello!
//     </div>
//   );
// }

class TopSearches extends React.Component {

  componentDidMount(){
    this.props.topSearches({type: 'FETCH_TOP_SEARCHES' })

  }

  render() {
    return (
        'Hello'
    );
  }
}

const mapStateToProps = state => {
  return {
    topSearches: state.topSearches
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSearches)
