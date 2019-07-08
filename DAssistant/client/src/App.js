import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card'
import Button from './components/CustomButtons/Button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Card/>
                <Button/>
            </div>
        );
    }
}

export default App;
