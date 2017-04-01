import React from 'react';

export default class Participant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCegekaEmployee: false }
    }

    render() {
        return <li>{this.props.name} {this.state.isCegekaEmployee && <span>&#10004;</span>}</li>;
    }
}