import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects';
import './styles.css';  // Import global styles

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>TUT AI-HEALTH REVOLUTION</h1>
                </header>
                <nav>
                    <ul>
                        
                        <li><Link to="/"><h1>Redefining the Future of Healthcare</h1></Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Projects />} />
                 
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;
