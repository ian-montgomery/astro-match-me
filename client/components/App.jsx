import React from 'react'

import Header from './Header.jsx'
import Search from './Search.jsx'
import Form from './Form.jsx'
import Matches from './Matches.jsx'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import Matcher from './Matches'

// This might need to be turned into a stateful (class-based) component
function App(props) {
  return (
    <div className='app'>
         <Header/>
         <Search/>
         <Form/>
         <Matches/>
         <Profile/>
         
    </div>
  )
}


function mapStateToProps(globalState) {
  return {
    activePage: globalState.activePage
  }
}

export default connect(mapStateToProps)(App)


// export class App extends React.Component {
//   state = {
//     fruits: []
//   }

//   // componentDidMount () {
//   //   this.props.dispatch(fetchFruits())
//   // }

//   render () {
//     return (
//       <div className='app'>
//         {Header}
//         {Search}
//         {Form}
//         {Profile}
//         {Matches}
//       </div>
//     )
//   }
// }

// function mapStateToProps (globalState) {
//   return {
//     fruits: globalState.fruits
//   }
// }

// export default connect(mapStateToProps)(App)
