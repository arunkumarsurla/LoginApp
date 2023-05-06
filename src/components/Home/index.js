import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import {Component} from 'react'

class Home extends Component {
    state = {isLoggedIn: false}
  
    onClickButton = () => {
      const {isLoggedIn} = this.state
      this.setState({isLoggedIn: !isLoggedIn})
    }
  
    render() {
      const {isLoggedIn} = this.state
  
      return (
        <div className="app-container">
          <div className="home-container">
            <Message isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
              <Logout logout={this.onClickButton} />
            ) : (
              <Login login={this.onClickButton} />
            )}
          </div>
        </div>
      )
    }
  }
  
  export default Home
  

