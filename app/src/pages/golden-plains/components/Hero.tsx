



import bird from '../assets/drawings/bird-4.svg';
import lanterns from '../assets/drawings/lanterns-4.svg';
import mushrooms from '../assets/drawings/mushrooms-4.svg';
import shoe from '../assets/drawings/shoe-2.svg';
import tree1 from '../assets/drawings/tree-1-4.svg';
import tree2 from '../assets/drawings/tree-2-2.svg';
import tree4 from '../assets/drawings/tree-4-2.svg';
import stage from '../assets/drawings/stage-3.png';

import logo from '../assets/logos/logo.png';

export default function Hero() {


    return (
        <div className="w-full h-fit min-h-12 overflow-y-hidden  bg-gp-dark-blue ">
            
            <div className="relative w-full h-screen">

                <img src={stage} alt="Stage 1" className="m-auto" />
                <img src={logo} alt="Logo" className="m-auto w-72" />
            </div>
        </div>
    )

}