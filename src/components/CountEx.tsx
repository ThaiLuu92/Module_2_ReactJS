import React, { Component } from 'react'

interface CountExState {
 count: number
}

export class CountEx extends Component<{},CountExState> {
    constructor (props:{}) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps: {}, prevState: CountExState) {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }
  render() {
    return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Increase
            </button>
        </div>
    )
  }
}

export default CountEx
