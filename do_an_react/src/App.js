import logo from './logo.svg';
import './App.css';
import TopBanner from './Module/TopBanner/TopBanner';
import Slider from './Module/Slider/Slider';
import Content from './Module/Content/Content';
import Latest from './Module/Latest/Latest';
import Poster from './Module/Poster/Poster';
import Xbox from './Module/Xbox/Xbox';
import Footer from './Module/Footer/Footer';
import Copyright from './Module/Copyright/Copyright';

function App() {
  return (
      <div>
        <TopBanner title_page='HALO'/>
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
