import React from 'react';
import './App.css';

function App() {
    // interface

    interface Contact {
        name: string;
        phone: string;
        email: string;
    }

    const contacts: Contact[] = [];

    const newContacts: Contact = {
        name: "Nguyen A A",
        phone: "012333212",
        email: "nothing@gmail.com",
    }

    return (
        <div></div>
    );
}

export default App;
