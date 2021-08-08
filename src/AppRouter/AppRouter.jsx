import React from 'react';
import Home from '../Features/Pages/Home/Home';
import Content from '../Features/Pages/Content/Content';
import { AnimatePresence,motion } from 'framer-motion';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import OlympicsData from '../Features/Pages/OlympicsData/OlympicsData';
import Registration from '../Features/Components/Form/registration';
import AthletesCards from '../Features/Components/AthletesCards/AthletesCards';
import { FormRegister } from '../Features/Components/FormRegister/FormRegister';
import NavBar from '../Features/Components/NavBar/NavBar';
import Footer from '../Features/Components/Footer/Footer';

function AppRouter() {    
   const variant = {
       hidden:{
           opacity:0
       },
       visible:{
        opacity:1
    }
   }
    return (
        <Router>
            <NavBar position />
            <NavBar  />   
            <Switch >
                <Route path="/" exact>
                    <Home  />
                    <Content />
                    <OlympicsData />
                </Route>

                <Route path="/OlympicData" >
                    <Registration />
                    <AthletesCards />
                </Route>
                <Route path="/FormRegister">
                    <FormRegister />
                </Route>
                <Footer />
            </Switch>

        <Footer />
        </Router>
    );
}

export default AppRouter;