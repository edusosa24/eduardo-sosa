import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className='links'>
        <Link to='/projects'>Mis proyectos</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className='home-image-container'>
        <img src={require('./images/eduardo-sosa.png')} alt="Eduardo Sosa"/>
      </div>
    </section>
  );
};

export default Home;