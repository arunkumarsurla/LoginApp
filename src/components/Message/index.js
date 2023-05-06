import './index.css'
import { Component } from 'react'


// Functional Components
const Message = props => {
    const {isLoggedIn} = props
    const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  
    return <h1 className="message">{message}</h1>
  }







//class Compopnent
// class Message extends Component {
//     render() {
//         const {isLoggedIn} = this.props
//         const message = isLoggedIn ? 'Welcome User' : 'Please Login'
//         return <h1 className="message">{message}</h1>    }
//    }

export default Message