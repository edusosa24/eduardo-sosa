import { Link } from 'react-router-dom';
import tecnologies from './tecnologies.json';
import uniqid from 'uniqid';
import '../../styles/About.css';

const About = () => {
  return (
    <section id='about'>
      <h1>Sobre mi</h1>
      <p className='about-me'>Me llamo <strong>Eduaro Sosa</strong>. Vivo en la Ciudad Autonoma de Buenos Aires, Argentina.
        <br /> Arme esta pagina como medio para mostrar mis proyectos y exponer lo que estoy haciendo/estudiando en el momento.
        <br /> Mi intencion es utilizar esta página para impulsar mi busqueda laboral ya que actualmente no cuento con experiencia.
      </p>

      <h2>Lenguajes, frameworks, herramientas, etc...</h2>

      <h3>Aprendidos (uso constante)</h3>
      <div className='tecnologies'>
        {tecnologies.learned.map((tech) => {
          return (
            <div className='tech-container' key={uniqid()}>
              <img className='tech-image' src={require(`${tech.image_url}`)} alt={tech.name}/>
            </div>
          );
        })}
      </div>


      <h3>Aprendiendo</h3>
      <div className='tecnologies'>
        {tecnologies.learning.map((tech) => {
          return (
            <div className='tech-container' key={uniqid()}>
              <img className='tech-image' src={require(`${tech.image_url}`)} alt={tech.name}/>
            </div>
          );
        })}
      </div>


      <h3>Proximos pasos</h3>
      <div className='tecnologies  last-block'>
        {tecnologies.next.map((tech) => {
          return (
            <div className='tech-container' key={uniqid()}>
              <img className='tech-image' src={require(`${tech.image_url}`)} alt={tech.name}/>
            </div>
          );
        })}
      </div>


      <div className='nav-links'>
        <Link className='to-home' to='/'>Home</Link>
        <Link className='to-projects' to='/projects'>Proyectos</Link>
      </div>

    </section>
  );
};

export default About;