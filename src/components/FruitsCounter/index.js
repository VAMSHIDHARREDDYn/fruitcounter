import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  // Add a blank line before methods
  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  // Add a blank line before methods
  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <h1>
          Bob ate <span className="mango">{count1}</span> mangoes{' '}
          <span className="banana">{count2}</span> bananas
        </h1>
        <div className="images">
          <div className="img-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="img-3"
            />
            <button type="button" className="button" onClick={this.onMango}>
              Eat Mango
            </button>
          </div>
          <div className="img-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="img-3"
            />
            <button type="button" className="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
