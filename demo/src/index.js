import React from 'react'
import { render } from 'react-dom'
import logo from './pinky.svg'

import Pinky from '../../src'

class Demo extends React.Component {
  state = {
    gender: 'female'
  }

  render() {
    const nextGender = this.state.gender === 'female' ? 'male' : 'female'

    return (
      <div>
        <h1>
          <img src={logo} />
          <span style={{ marginLeft: 10 }}>Pinky</span>
        </h1>

        <h2>3s then resolve</h2>
        <Pinky promise={new Promise((resolve, reject) => setTimeout(() => resolve('Yay after 3s'), 3000))}>
          {({pending, resolved, rejected}) => (
            <div>
              {pending && <div>pending</div>}
              {resolved && <div>resolved: {resolved}</div>}
              {rejected && <div>rejected: {rejected}</div>}
            </div>
          )}
        </Pinky>

        <h2>3s then reject</h2>
        <Pinky promise={new Promise((resolve, reject) => setTimeout(() => reject('Nay after 3s'), 3000))}>
          {({pending, resolved, rejected}) => (
            <div>
              {pending && <div>pending</div>}
              {resolved && <div>resolved: {resolved}</div>}
              {rejected && <div>rejected: {rejected}</div>}
            </div>
          )}
        </Pinky>

        <h2>Immediate Yay</h2>
        <Pinky promise={Promise.resolve('Immediate Yay')}>
          {({pending, resolved, rejected}) => (
            <div>
              {pending && <div>pending</div>}
              {resolved && <div>resolved: {resolved}</div>}
              {rejected && <div>rejected: {rejected}</div>}
            </div>
          )}
        </Pinky>

        <h2>Immediate Nay</h2>
        <Pinky promise={Promise.reject('Immediate Nay')}>
          {({pending, resolved, rejected}) => (
            <div>
              {pending && <div>pending</div>}
              {resolved && <div>resolved: {resolved}</div>}
              {rejected && <div>rejected: {rejected}</div>}
            </div>
          )}
        </Pinky>

        <h2>Fetch randomuser.me</h2>
          <button onClick={() => this.setState({ gender: nextGender })}>toggle gender</button>
          <Pinky promise={fetch(`http://api.randomuser.me/?gender=${this.state.gender}`).then(res => res.json())}>
          {({pending, resolved, rejected}) => (
            <div>
              {pending && <div>Loading...</div>}
              {resolved && <div>resolved: {`${resolved.results[0].name.title} ${resolved.results[0].name.first} ${resolved.results[0].name.last}`}</div>}
              {rejected && <div>rejected: {rejected}</div>}
            </div>
          )}
        </Pinky>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
