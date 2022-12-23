import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    let catagory
    if (count % 2 === 0) {
      catagory = 'Even'
    } else {
      catagory = 'Odd'
    }
    return (
      <div className="container">
        <div className="app">
          <h1 className="heading">Count {count}</h1>
          <p className="heading2">Count is {catagory}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
