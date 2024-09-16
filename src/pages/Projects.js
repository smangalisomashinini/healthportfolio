import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project7.jpg';
import project5 from '../assets/images/heartrate.jpg';
import project6 from '../assets/images/heartattack.jpg';
import project7 from '../assets/images/heatmap.png';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Our Health Projects</h1>
            <div className="projects-grid">
                <div className="project-item">
                    <a href="https://d956f1f4110f5a6921.gradio.live" target="_blank" rel="noopener noreferrer">
                        <img src={project1} alt="Project 1" />
                    </a>
                    <h2>Pneumonia-detection</h2>
                </div>
                <div className="project-item">
                    <a href="https://620e1b2f6e42dfc1c2.gradio.live/" target="_blank" rel="noopener noreferrer">
                        <img src={project2} alt="Project 2" />
                    </a>
                    <h2>Brain tumor-detection</h2>
                </div>
               
              
                <div className="project-item">
                    <a href="https://huggingface.co/spaces/mdalakeys/diabeticsRec" target="_blank" rel="noopener noreferrer">
                        <img src={project4} alt="Project 4" />
                    </a>
                    <h2>Diabetic Retinopathy Detection</h2>
                </div>
               
                
                <div className="project-item">
                    <a href="https://eacb719fd6ed35ca2e.gradio.live" target="_blank" rel="noopener noreferrer">
                        <img src={project3} alt="Project 3" />
                    </a>
                    <h2>Skin cancer detection</h2>
                </div>

            </div>
            <div className="projects-grid">
                <div className="project-item">
                    <a href="https://huggingface.co/spaces/kamogeloVutomi/breathing" target="_blank" rel="noopener noreferrer">
                        <img src={project5} alt="Project 1" />
                    </a>
                    <h2>Breathing rate monitoring</h2>
                </div>
                <div className="project-item">
                    <a href="https://huggingface.co/spaces/KhumaloKat/Heart-Disease-Prediction" target="_blank" rel="noopener noreferrer">
                        <img src={project6} alt="Project 2" />
                    </a>
                    <h2>heart disease prediction</h2>
                </div>
        <div className="project-item">
                    <a href="http://127.0.0.1:7860" target="_blank" rel="noopener noreferrer">
                        <img src={project7} alt="Project 2" />
                    </a>
                    <h2>pneumonia detection heatmap</h2>
                </div>
              
            </div>
        </div>
    );
};

export default Projects;
