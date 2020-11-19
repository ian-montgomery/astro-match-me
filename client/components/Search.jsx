import React from 'react'

import { connect } from 'react-redux'


class Search extends React.Component {


  render() {
    return (
      <>

        <div className="search-box-div">
          <form className="search-box" action="./">
            <input className='search' type="text" placeholder="Search.." name="search" />

            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>

      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    profiles: globalState.profiles

  }
}

export default connect(mapStateToProps)(Search)
