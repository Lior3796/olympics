import React from 'react';
import HomeCover from '../../Components/HomeCover/HomeCover';
import NavBar from '../../Components/NavBar/NavBar';
import { motion } from 'framer-motion';
function Home() {
  
    return (
        <motion.div>   
            <HomeCover />
        </motion.div>
    );
}

export default Home;