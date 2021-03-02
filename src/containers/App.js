import './App.css';
import Navigation from '../components/NavigationItems/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={{
          particles: {
            number: {
              value: 75,
              density:{
                enable: true,
                value_area: 800
              }
            }
          }
        }} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
