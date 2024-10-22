
import { Routes, Route } from "react-router-dom";

import FooterGP from "./FooterGP";
import HeaderGP from "./HeaderGP";
import MainGP from "./MainGP";


import background from '../assets/background.png';


export default function PageContainer() {



    return (
        <div className="bg-gp-dark-blue w-full h-full min-h-screen p-3 sm:px-6 md:px-12 lg:px-48">
           
                <HeaderGP />
                <MainGP />
                <FooterGP />
               
            </div>

     
    )
}