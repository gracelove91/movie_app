import React from 'react';
import propTypes from 'prop-types';


class App extends React.Component {

    state = {
        count: 0
    };

    add = () => {
        // this.state.count++;
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        this.setState({count: this.state.count-1})
    };


    constructor(props) {
        super(props);
        console.log('Constructor()');
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate()');
        console.log(prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }


    render() {
        console.log('render()');
        return <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }

}

export default App;