// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  onClickSubscribe = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="background">
        <h1 className="heading">Welcome</h1>
        <p className="about">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.onClickSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
