import React, { Component } from 'react'
import './index.less'
import logo from '@/assets/logo.svg'

export default class Index extends Component {

  state = {
    count: 0
  }

  setCount = (count) => {
    this.setState({
      count: count + 1
    })
  }

  render() {

    const {count} = this.state

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React!</p>
            <p>
              <button type="button" onClick={() => this.setCount(count)}>
                count is: {count}
              </button>
            </p>
            <p>
              Edit <code>App.jsx</code> and save to test HMR updates.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {' | '}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </p>
          </header>
        </div>
      </div>
    )
  }
}

