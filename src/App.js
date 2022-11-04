import React from "react";
import Menu from './components/Menu';
import Body from './components/Body';
import Strip from './components/MusicStrip';
import './styles/app.css';

const App = () => {
    return (
        <div className="main-container">
            <Menu/>
            <Body/>
            <Strip/>
        </div>
    );
}

export default App;
