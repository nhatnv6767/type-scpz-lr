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

    const newContact: Contact = {
        name: "Nguyen A A",
        phone: "012333212",
        email: "nothing@gmail.com",
    }

    contacts.push(newContact);

    return (
        <div></div>
    );
}

export default App;
