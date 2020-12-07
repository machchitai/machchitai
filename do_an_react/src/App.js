//import logo from './logo.svg';
import './App.css';   

import TopBanner from './Module/TopBanner/TopBanner';

import Home from './Pages/Home';
import Details from './Pages/Details';
import Contacts from './Pages/Contacts';
import ShoppingCart from './Pages/ShoppingCart';

import Footer from './Module/Footer/Footer';

import ButtonGoToShoppingCart from './Module/ButtonGoToShoppingCart/ButtonGoToShoppingCart';

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

            <Route path='/details/:id_product'>
              <Details></Details>
            </Route>    
        
            <Route path='/contact'>
               <Contacts></Contacts>
            </Route>

            <Route path='/shopping-cart'>
               <ShoppingCart></ShoppingCart>
            </Route>


            <Route path='/'>
                <Home></Home>
            </Route>

        </Switch>    

        <ButtonGoToShoppingCart></ButtonGoToShoppingCart>     
         
        <Footer />

      </Router>
      

    </>
  );
}

export default App;
