import logo from './logo.svg';
import './App.css';
import TopBanner from './Module/TopBanner';
import Slider from './Module/Slider';
import Content from './Module/Content';
import Latest from './Module/Latest';
import Poster from './Module/Poster';
import Xbox from './Module/Xbox';
import Footer from './Module/Footer';
import Copyright from './Module/Copyright';

function App() {
  return (
      <div>
        <TopBanner/>
        <Slider/>
        <Content/>
        <Latest/>
        <Poster/>
        <Xbox/>
        <Footer/>
        <Copyright/>
      </div> 
  );
}

export default App;
