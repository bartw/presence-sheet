import React from 'react';
import Header from './Header';
import AddParticipant from './AddParticipant';
import Participants from './Participants';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { participants: [] };
        this.addParticipant = this.addParticipant.bind(this);
    }

    addParticipant(name) {
        if (!this.state.participants.find(participant => participant === name)) {
            this.setState(prevState => ({ participants: prevState.participants.concat(name) }));
        }
    }

    render() {
        return (
            <div>
                <Header name="Bart" />
                <AddParticipant onAdd={this.addParticipant} />
                <Participants participants={this.state.participants} />
            </div>
        );
    }
}