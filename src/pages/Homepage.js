//Components
import Searchbar from '../components/Searchbar';
import Background from '../components/Background';
import ConfigCatSample from '../components/ConfigCatSample';

const Homepage = () => {
  return (
    <div className='homepage'>
      <ConfigCatSample />

      {/* <Searchbar /> */}

      <Background />
    </div>
  );
};

export default Homepage;
