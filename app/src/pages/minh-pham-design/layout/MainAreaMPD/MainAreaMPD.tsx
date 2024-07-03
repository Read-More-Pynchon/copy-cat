

import { useState, useEffect } from 'react';
import HomeMPD from '../../components/HomeMPD/HomeMPD';
import TopNavigation from '../TopNavigation/TopNavigation';
import './MainAreaMPD.css';
import About from '../../components/About/About';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';
import SocialNavigation from '../SocialNavigation/SocialNavigation';

export default function MainArea() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveCursor = (event: any) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setPosition({ x: mouseX, y: mouseY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);

    return (
        <div className="mainArea">
            <div
                id="cursorRound"
                className="cursorRounded"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            >

            </div>
            <TopNavigation />
            <SocialNavigation />
            <HomeMPD />
            <About />
            <Work />
            <Contact />
            

        </div>

    )
}