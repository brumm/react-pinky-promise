import React, { PropTypes } from 'react'

const noOp = () => null
const INITIAL_STATE = {
  pending: true,
  resolved: undefined,
  rejected: undefined,
}

class Pinky extends React.Component {

  static propTypes = {
    promise: React.PropTypes.instanceOf(Promise).isRequired,
    children: React.PropTypes.func
  }

  static defaultProps = {
    children: noOp,
  }

  state = INITIAL_STATE

  constructor(props) {
    super(props)
    if (props.promise instanceof Promise) {
      this.handlePromise(props.promise)
    } else {
      throw new Error(`prop 'promise' must be an instance of Promise`)
    }
  }

  componentWillReceiveProps ({ promise }) {
    if (promise !== this.props.promise) {
      this.setState(INITIAL_STATE)
      this.handlePromise(promise)
    }
  }

  componentDidMount() {
		this._isMounted = true
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	handlePromise(promise) {
		promise.then(
      resolved => this._isMounted && this.setState({ resolved, pending: false, rejected: undefined }),
      rejected => this._isMounted && this.setState({ resolved: undefined, pending: false, rejected })
    )
	}

  render() {
    const { children } = this.props
    const { pending, resolved, rejected } = this.state
    return children({ pending, resolved, rejected })
  }
}

export default Pinky
