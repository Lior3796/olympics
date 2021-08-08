import React, { useState, useRef, createContext, useContext } from 'react';
import './FormRegister.css';
import { Link, Route } from 'react-router-dom';
import ThanksPage from '../ThanksPage/ThanksPage';
import { motion } from 'framer-motion';
import { FormContext } from '../../../Context';
import Home from '../../Pages/Home/Home';
import Log from '../Log/Log';
import { UserNameContext } from '../../../Context';

const FormContextProvider = FormContext();

export function FormRegister() {
    const form = useRef();
    const [changeNav, setChangeNav] = useState(true);
    const [status, setStatus] = useState("");
    
    const RegistrationVar = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: "0",
            transition: {
                duration: 1.5,

            },
            exit: {
                x: "100vw"
            }

        }
    }
    return (

        <motion.div variants={RegistrationVar} exit="exit" initial="hidden" animate="visible" className="Container-form">
            <div className="logo-container">
                <img src="https://img.olympicchannel.com/images/image/private/t_1-1_300/primary/apw4ubzgyihvp9nmml7j" alt="" />
            </div>

            <div className="FormRegister-container">
                <form onSubmit={(e) => { e.preventDefault() }} className="form" ref={form} >
                    <div>
                        <input placeholder="UserName" type="text" />
                    </div>
                    <div>
                        <input placeholder="Password" type="password" />
                    </div>
                    <div>
                        <input type="text" placeholder="User-Email" />
                    </div>
                    
                    <UserNameContext.Provider value={form}>
                    <Link innerRef={form} to="/"   >
                    <button className="form-button">click</button>
                        <Route  path="/" />

                    </Link>
                    </UserNameContext.Provider>

                </form>
            </div>
        </motion.div>

    );
}




