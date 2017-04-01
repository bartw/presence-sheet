import React from 'react';

export default function Participants({ participants }) {
    const items = participants.map(participant => <li key={participant}>{participant}</li>);
    return (
        <ul>
            {items}
        </ul>
    );
}