import React from 'react';

export default class Participant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCegekaEmployee: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ isCegekaEmployee: !prevState.isCegekaEmployee }));
    }

    render() {
        return (
            <li>
                <button onClick={this.toggle}>Toggle</button>
                <span>{this.props.name}</span>
                {this.state.isCegekaEmployee && <span>&#10004;</span>}
            </li>
        );
    }
}