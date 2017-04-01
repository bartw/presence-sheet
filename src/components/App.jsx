import React from 'react';
import Header from './Header';
import Participants from './Participants';

export default function App() {
    return (
        <div>
            <Header name="Bart" />
            <Participants participants={['Otis', 'Linus']} />
        </div>
    );
}