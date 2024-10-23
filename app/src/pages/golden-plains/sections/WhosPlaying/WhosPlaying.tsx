
import { useEffect, useState } from "react";
import { artistCards, ArtistCard } from './WhosPlayingData';

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








export default function WhosPlaying() {


    const artistImages = artistCards.map(({ name, artistImage }, index) => {
        return (

            <img id={`artist-${index}`} className="w-full h-auto" src={artistImage} alt={name} />

        )
    });

    const [currentImage, setCurrentImage] = useState('pjHarvey');

    //Modal states
    const [isArtistShown, setIsArtistShown] = useState(false);
    const [currentArtist, setCurrentArtist] = useState<ArtistCard>(artistCards[0]);

    const whosPlayingModal = () => {


        const showSelectedArtist = (name: string) => {
            const selectedCard = artistCards.find(card => card.name === name);
            if (selectedCard) setCurrentArtist(selectedCard);

        }

        const showPreviousArtist = () => {
            const currentIndex = (currentArtist) ? artistCards.findIndex(card => {
                return card === currentArtist;
            }) : 0;
            if (currentIndex === 0) {
                setCurrentArtist(artistCards[artistCards.length - 1])
            } else {
                setCurrentArtist(artistCards[currentIndex - 1]);
            }
        }

        const showNextArtist = () => {
            const currentIndex = (currentArtist) ? artistCards.findIndex(card => {
                return card === currentArtist;
            }) : 0;
            if (currentIndex === artistCards.length - 1) {
                setCurrentArtist(artistCards[0])
            } else {
                setCurrentArtist(artistCards[currentIndex + 1]);
            }
        }

        const closeModal = () => {
            setIsArtistShown(false);
        }

        const modalMenu = artistCards.map(({ name }, index) => {
            return (

                <button
                    onClick={() => showSelectedArtist(name)}
                    className="font-gp-title text-gp-green hover:text-gp-yellow hover:blur-sm text-4xl md:text-6xl"
                >
                    {` ${name}. `}
                </button>
            )
        })

        if (isArtistShown) {
            return (
                <div className="p-3 z-50 w-full h-screen fixed -top-5 left-0 overflow-y-scroll">
                    <div className="grid grid-cols-12 bg-gp-green lg:hidden">
                        <div className="col-span-12 grid grid-cols-12 p-3">
                            <div className="col-span-6">
                                <h1 className="text-gp-dark-blue text-3xl text-left p-2">Who's Playing</h1>
                            </div>
                            <div className="col-span-3"></div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={showPreviousArtist}
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                                </svg>

                            </div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={showNextArtist}
                                >
                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                </svg>
                            </div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={closeModal}
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>

                            </div>
                            <div className="col-span-12 text-center text-5xl text-gp-dark-blue font-gp-title uppercase">
                                {currentArtist.name}
                            </div>
                        </div>
                        <div className="col-span-12">
                            <img className="w-full h-auto" src={currentArtist.artistImage} alt={currentArtist.name} />
                        </div>
                        <div className="col-span-12">
                            <p className="text-gp-dark-blue font-gp-text">{currentArtist.bio}</p>
                        </div>
                    </div>

                    <div className=" hidden  lg:grid grid-cols-12 bg-gp-green relative">
                        <div className="col-span-6 sticky">
                            <img className="w-full h-auto" src={currentArtist.artistImage} alt={currentArtist.name} />
                        </div>
                        <div className="col-span-6 grid grid-cols-12 p-3">
                            <div className="col-span-6">
                                <h1 className="text-gp-dark-blue text-3xl text-left p-2">Who's Playing</h1>
                            </div>
                            <div className="col-span-3"></div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={showPreviousArtist}
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                                </svg>
                            </div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={showNextArtist}
                                >
                                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                </svg>
                            </div>
                            <div className="col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                    className="fill-gp-dark-blue hover:fill-gp-dark-blue-700 w-6 h-auto"
                                    onClick={closeModal}
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </div>
                            <div className="col-span-12 m-12 text-center text-5xl text-gp-dark-blue font-gp-title uppercase">
                                {currentArtist.name}
                            </div>
                            <div className="col-span-12 m-12 p-6">
                                <p className="text-gp-dark-blue font-gp-text text-2xl">{currentArtist.bio}</p>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-gp-light-blue text-gp-green">
                        {modalMenu}
                    </footer>
                </div>

            )
        }
    }

    const handleArtistHover = (artistImage: string) => {
        setCurrentImage(artistImage);
        showCurrentImage();
    }

    const handleArtistClick = (name: string) => {
        const selectedCard = artistCards.find(card => card.name === name);
        if (selectedCard) setCurrentArtist(selectedCard);
        setIsArtistShown(true)


    }

    const showCurrentImage = () => {
        return (
            <img className="w-[64rem] h-auto m-auto" src={currentImage} alt='Home Page Artist' />

        )
    }

    const artistNames = artistCards.map(({ name, artistImage }, index) => {
        switch (index % 4) {
            case 0:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-green text-3xl md:text-6xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                        onClick={() => handleArtistClick(name)}
                    >
                        {name}
                    </h1>
                );
            case 1:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-red text-3xl md:text-6xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                        onClick={() => handleArtistClick(name)}
                    >
                        {name}
                    </h1>
                );
            case 2:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-yellow text-3xl md:text-6xl  lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                        onClick={() => handleArtistClick(name)}
                    >
                        {name}
                    </h1>
                );
            case 3:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-dark-blue text-3xl md:text-6xl  lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                        onClick={() => handleArtistClick(name)}
                    >
                        {name}
                    </h1>
                );
            default:
                return (
                    <h1 id={name.toLowerCase().replace(/\s/g, '-')} key={index} className="font-gp-title text-gp-green text-3xl md:text-6xl lg:text-6xl uppercase text-center hover:blur-sm hover:shadow-sm"
                        onMouseOver={() => handleArtistHover(artistImage)}
                        onClick={() => handleArtistClick(name)}
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
                <div className="col-span-12 lg:col-span-6 p-12 h-fit lg:h-[48rem] md:overflow-y-scroll ">
                    {artistNames}
                </div>
                <div className="hidden lg:block lg:col-span-6 h-[48rem] overflow-hidden">
                    {showCurrentImage()}
                </div>
            </div>
            {whosPlayingModal()}

        </>


    )

} 