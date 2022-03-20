import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className='links'>
        <div className='link-container'>
          <Link to='/projects'>Mis proyectos</Link>
        </div>
        <div className='link-container'>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;