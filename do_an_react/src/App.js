//import logo from './logo.svg';
import './App.css';   

import TopBanner from './Module/TopBanner/TopBanner';
import Slider from './Module/Slider/Slider';
import Content from './Module/Content/Content';
import Lastest from './Module/Lastest/Lastest';
import Poster from './Module/Poster/Poster';
import PosterDetails from './Module/Poster/PosterDetails';
import Xbox from './Module/Xbox/Xbox';
import Footer from './Module/Footer/Footer';
import Contact from './Module/Contact/Contact';
import { useState } from 'react';
import {
   Route, Switch, BrowserRouter as Router
} from 'react-router-dom';


function App() {

  const[load_top_banner, SetLoadTopBanner] = useState(true);

  const handleUnMountTopBanner = () => {
    SetLoadTopBanner(false);
  }

  return (
    <>
      <Router>
        {
          (load_top_banner)?
          <TopBanner title_page={"Halo " + "Store "} delete_me={handleUnMountTopBanner} />
          :
          null
        }  
              
        <Switch>   

            <Route path='/details/:id_san_pham'>
                <PosterDetails />
            </Route>

            <Route path='/details'>
                <Poster />
                <Xbox />
            </Route>            
        
            <Route path='/contact'>
                <Contact />
            </Route>

            <Route path='/'>
                <Slider />
                <Content />
                <Lastest />
            </Route>

        </Switch>    
        
        <Footer />

      </Router>
      

    </>
  );
}

export default App;
