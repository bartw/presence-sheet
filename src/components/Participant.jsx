import React from 'react';

export default class Participant extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.name}</li>;
    }
}