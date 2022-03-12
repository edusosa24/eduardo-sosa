import { Link } from 'react-router-dom';
import projects from './projects.json';
import uniqid from 'uniqid';
import '../../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className='projects-sect-title'>Mis proyectos</h1>
      <p className='intro'>
        Muchos necesitan cambios, que ire haciendo con el tiempo.
        <br /> Estos no son todos, pero son de los que estoy mas orgulloso.
      </p>

      <h2>Front end (Puramente estético - No js)</h2>
      <div className='projects-separator'>
        {projects.front_nojs.map((project) => {
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

      <h2>Front end (Utilizando js)</h2>
      <div className='projects-separator'>
        {projects.front_js.map((project) => {
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

      <h2>Front end (Utilizando React)</h2>
      <div className='projects-separator'>
        {projects.front_react.map((project) => {
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

      <h2>Fullstack (No db - Desarrollando actualmente)</h2>
      <div className='projects-separator last-block'>
        {projects.fullstack_nodb.map((project) => {
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