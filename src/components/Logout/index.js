import './index.css'
import { Component } from 'react'



const Logout = props => {
    const {logout} = props
  
    return (
      <button type="button" className="logout-button" onClick={logout}>
        Logout
      </button>
    )
  }
  


// class Logout extends Component{
//     render(){
//         const {logout} = this.props
//         return(
//             <button type="button" className="logout-button" onClick={logout}>
//       Logout
//     </button>
//   )
//     }
// }

export default Logout