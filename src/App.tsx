import React from 'react';
import './App.css';

function App() {
    function sum(a: number, b: number): number {
        return a + b;
    }

    function waitAndDo(callback: (param: string) => void) {
        setTimeout(() => {
            callback("Oops!");
        }, 1000)
    }

    return (
        <div></div>
    );
}

export default App;
