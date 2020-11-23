import logo from './logo.svg';
import './App.css';
import Header from './Module/Header';
import Slider from './Module/Slider';
import BestDishes from './Module/BestDishes';
import BookOnline from './Module/BookOnline';
import Map from './Module/Map';
import Contact from './Module/Contact';
import Footer from './Module/Footer';
import CopyRights from './Module/CopyRights';
import Fix from './Module/Fix';
function App() {
  return (
    <div>
        <Header></Header>
        <Slider></Slider>
        <BestDishes></BestDishes>
        <BookOnline></BookOnline>
        <Map></Map>
        <Contact></Contact>
        <Footer></Footer>
        <CopyRights></CopyRights>
        <Fix></Fix>
    </div>
  );
}

export default App;
