// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Buttton has been clicked
          <br />
          <span className="text">{count}</span> times
        </h1>
        <p>click the button to increase the count</p>
        <div>
          <button
            type="button"
            onClick={this.onIncrement}
            className="blue-button"
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
