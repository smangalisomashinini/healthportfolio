import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Our Health Projects</h1>
            <div className="projects-grid">
                <div className="project-item">
                    <a href="https://8bda4ee6ae7a45a9c6.gradio.live/" target="_blank" rel="noopener noreferrer">
                        <img src={project1} alt="Project 1" />
                    </a>
                    <h2>Pneumonia-detection</h2>
                </div>
                <div className="project-item">
                    <a href="https://508508378f2372a01f.gradio.live" target="_blank" rel="noopener noreferrer">
                        <img src={project2} alt="Project 2" />
                    </a>
                    <h2>Brain tumor-detection</h2>
                </div>
                <div className="project-item">
                    <a href="https://1541a8f810545f6c49.gradio.live" target="_blank" rel="noopener noreferrer">
                        <img src={project3} alt="Project 3" />
                    </a>
                    <h2>Skin cancer</h2>
                </div>
                <div className="project-item">
                    <a href="http://link-to-project4.com" target="_blank" rel="noopener noreferrer">
                        <img src={project4} alt="Project 4" />
                    </a>
                    <h2>Heart rate monitoring</h2>
                </div>
            </div>
        </div>
    );
};

export default Projects;
