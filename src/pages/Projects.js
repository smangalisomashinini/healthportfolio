import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project7.jpg';
import project5 from '../assets/images/heartrate.jpg';
import project6 from '../assets/images/heartattack.jpg';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Our Health Projects</h1>
            <div className="projects-grid">
                <div className="project-item">
                    <a href="https://2e9ecce57ebbe3a6d1.gradio.live" target="_blank" rel="noopener noreferrer">
                        <img src={project1} alt="Project 1" />
                    </a>
                    <h2>Pneumonia-detection</h2>
                </div>
                <div className="project-item">
                    <a href="https://a0b7cad4059965c747.gradio.live" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://fe8834f45793b5fc69.gradio.live" target="_blank" rel="noopener noreferrer">
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
              
            </div>
        </div>
    );
};

export default Projects;
