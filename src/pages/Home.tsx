import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Hobbies from '../components/Hobbies/Hobbies';

const Home: React.FC = () => {
  

  return (
    <div>
      <Header />
      <Projects />
      <Experience />
      <Hobbies />
    </div>
  );
};

export default Home;