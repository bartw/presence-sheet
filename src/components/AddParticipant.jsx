import React from 'react';

export default class AddParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({ name: event.target.value });
    }

    onClick() {
        this.props.onAdd(this.state.name);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.onChange} placeholder="name" />
                <button onClick={this.onClick}>Add</button>
            </div>
        );
    }
}