
import { useEffect, useState } from "react";
import { artistCards } from "./WhosPlayingData";

import zjoso from '../../assets/artists/zjoso.png';
import uncleBarry from '../../assets/artists/uncle-barry.png';
import wetKiss from '../../assets/artists/wet-kiss.png';
import sunRaArkestra from '../../assets/artists/sun-ra-arkestra.png';
import teetherAndKuyaNeil from '../../assets/artists/teether-and-kuya-neil.png';
import thelmaPlum from '../../assets/artists/thelma-plum.png';
import mulgaBoreHardRock from '../../assets/artists/mulga-bore-hard-rock.png';
import osees from '../../assets/artists/osees.png';
import pjHarvey from '../../assets/artists/pjHarvey.png';
import skeleten from '../../assets/artists/skeleten.png';
import graceCummings from '../../assets/artists/grace-cummings.png';
import hermanosGutierrez from '../../assets/artists/hermanos-gutierrez.png';
import jadaWeazel from '../../assets/artists/jada-weazel.png';
import kneecap from '../../assets/artists/kneecap.png';
import magdalenaBay from '../../assets/artists/magdalena-bay.png';
import fontainesDc from '../../assets/artists/fontaines-dc.png';
import elliotAndVincent from '../../assets/artists/elliot-and-vincent.png';
import elaMinus from '../../assets/artists/ela-minus.png';
import durandJones from '../../assets/artists/durand-jones.png';
import ccl from '../../assets/artists/ccl.png';
import bonnyLightHorseman from '../../assets/artists/bonny-light-horseman.png';
import bahamadia from '../../assets/artists/bahamadia.png';
import adriana from '../../assets/artists/adriana.png';
import twomanydjs from '../../assets/artists/2manydjs.png';





function WhosPlayingModal(){



    return(
        <div>
            <header className="grid-col-12 bg-gp-green">

            </header>
            <main className="grid-col-12 bg-gp-green">
                <div className="col-span-12 md:col-span-6">

                </div>
                <div className="col-span-12 md:col-span-6">
                    
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}





export default function WhosPlaying() {

    const artistImages = artistCards.map(({ name, artistImage }, index) => {
        return (

            <img id={`artist-${index}`} className="w-full h-auto" src={artistImage} alt={name} />

        )
    });

    const [currentImage, setCurrentImage] = useState('pjHarvey');

    const handleArtistHover = (artistImage: string) => {
        setCurrentImage(artistImage);
        showCurrentImage();
    }

    const showCurrentImage = () => {
        return (
            <img className="w-full h-auto" src={currentImage} alt='Home Page Artist' />

        )
    }

    const artistNames = artistCards.map(({ name, artistImage }, index) => {
        switch (index % 4) {
            case 0:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-green text-xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                    >
                        {name}
                    </h1>
                );
            case 1:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-red text-xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                    >
                        {name}
                    </h1>
                );
            case 2:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-yellow text-xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                    >
                        {name}
                    </h1>
                );
            case 3:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-dark-blue text-xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                    >
                        {name}
                    </h1>
                );
            default:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-green text-xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                    >
                        {name}
                    </h1>
                );
        }
    })

    return (
        <>

            <div id="whos-playing" className="grid grid-cols-12 mt-24 mb-48 pt-12">
                <div className="col-span-12 lg:col-span-6">
                    <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto">
                        WHO'S PLAYING
                    </h1>
                </div>
                <div className="col-span-12 lg:col-span-6 md:text-3xl font-bold">
                    <p className="text-center  my-3">
                        A Premium Dream. The sights and sounds of planets aligning.
                    </p>
                    <p className="text-center my-3">
                        Heaven-sent and custom‑cut for an Epic Long Weekend in the Supernatural-est Amphitheatre on Earth.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-gp-light-blue">
                <div className="col-span-12 md:col-span-6 p-12  h-[48rem] overflow-y-scroll ">
                    {artistNames}
                </div>
                <div className="hidden md:block md:col-span-6 h-[48rem] overflow-y-hidden">
                    <p>Current Image</p>
                    {showCurrentImage()}

                </div>
            </div>


        </>


    )

} 