import { Link } from 'react-router-dom';
import projects from './projects.json';
import uniqid from 'uniqid';
import '../../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className='projects-sect-title'>Mis proyectos</h1>
      <p className='intro'>
        Algunos de los proyectos que arme para aprender a usar distintas tecnologías y herramientas.
      </p>

      <h2>Front-end</h2>
      <div className='projects-separator'>
        {projects.frontend.map((project) => {
          return (
            <div className='project-container' key={uniqid()}>
              <div className='image-container'>
                <a href={project.project_url} target="_blank" rel="noreferrer">
                  <img className='project-image' src={require(`${project.image_url}`)} alt={project.project_name} />
                </a>
              </div>
              <a href={project.github_url}>
                <p className='code-link'>Code</p>
              </a>
            </div>
          );
        })}
      </div>

      <h2>Back-end</h2>
      <div className='projects-separator last-block'>
        {projects.backend.map((project) => {
          return (
            <div className='project-container' key={uniqid()}>
              <div className='image-container'>
                <a href={project.project_url} target="_blank" rel="noreferrer">
                  <img className='project-image' src={require(`${project.image_url}`)} alt={project.project_name} />
                </a>
              </div>
              <a href={project.github_url}>
                <p className='code-link'>Code</p>
              </a>
            </div>
          );
        })}
      </div>

      <div className='nav-links'>
        <Link className='to-home' to="/">Home</Link>
        <Link className='to-about' to="/about">About</Link>
      </div>

    </section>
  );
};

export default Projects;