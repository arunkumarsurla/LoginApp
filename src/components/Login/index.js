import './index.css'
import { Component } from 'react'

const Login = props => {
    const {login} = props
    return (
        <button type="button" className="login-button" onClick={login}>
          Login
        </button>
      )
    }

// class Login extends Component{
//     render() {
//         const {login} = this.props
//         return <button type="button" className="login-button" onClick={login}>
//         Login
//       </button> 
//         }
//    }

    
export default Login
    

