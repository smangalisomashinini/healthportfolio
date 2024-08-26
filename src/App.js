import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import './styles.css';  // Import global styles

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>My Health Project Portfolio</h1>
                </header>
                <nav>
                    <ul>
                        
                        <li><Link to="/">Projects</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Projects />} />
                 
                </Routes>
                <footer>
                    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
