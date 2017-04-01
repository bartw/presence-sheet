import React from 'react';
import Participant from './Participant';


export default function Participants({ participants }) {
    const items = participants.map(participant => <Participant key={participant} name={participant} />);
    return (
        <ul>
            {items}
        </ul>
    );
}