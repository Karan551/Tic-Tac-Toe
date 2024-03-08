import React from 'react';
import "./styles.css"
import Button from './Components/Button'
function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <div className="btn-container">
            <Button title="Apple Store"/>
            <Button title="Google Store"/>
            <Button />
            </div>
        </div>
    );
}

export default App;