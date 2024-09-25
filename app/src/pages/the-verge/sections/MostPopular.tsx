


import openai from '../assets/most-popular/openAI.png';
import metaglasses from '../assets/most-popular/metaGlasses.png';

export default function MostPopular() {

    return (
        <div className="p-6 bg-verge-black">
            <div className="grid grid-cols-12 p-3 bg-verge-black">
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">

                </div>
                <div className="col-span-12 sm:col-spa-10 md:col-span-6 lg:col-span-8 grid grid-cols-2 relative">
                    <div className="section-main col-span-2 lg:col-span-1 bg-verge-black m-2 p-3 rounded-3xl">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1">
                                <p className="text-6xl text-verge-aqua align-top -translate-y-6">&bull;</p>
                            </div>
                            <div className="col-span-11">
                                <p className="text-white font-mpd-jost">Today's Storystream</p>
                                <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Feed refreshed 20 minutes ago</p>
                                <p className="text-xs text-verge-aqua uppercase font-mpd-jost">It’s electric</p>
                                <hr className="border-b-2 border-b-verge-black-600 w-1/4 mt-3" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 p-2">
                                <p className="text-sm text-verge-black-400 underline underline-offset-8 decoration-verge-aqua -rotate-90 uppercase align-center text-justify font-mpd-jost translate-y-12">
                                    OpenAI
                                </p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-2xl">An official OpenAI X account was taken over to peddle a crypto scam</p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">Jay Peters</p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">Sep 24, 2024, 9:25 AM GMT+10</p>
                                </span>


                            </div>
                            <div className="col-span-3">
                                <img src={openai} alt="OpenAI Logo Green" className="w-full" />
                            </div>
                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 p-2">
                                <p className="text-sm text-verge-black-400 underline underline-offset-8 decoration-verge-aqua -rotate-90 uppercase align-center text-justify font-mpd-jost translate-y-12">
                                    CARS
                                </p>
                            </div>
                            <div className="col-span-8 p-2">
                                <p className="text-white font-verge-oswald text-2xl hover:underline hover:underline-offset-4 hover:decoration-verge-aqua">
                                    Meta has a major opportunity to win the AI hardware race
                                </p>

                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">
                                        Victoria Song
                                    </p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">
                                        Sep 21, 2024, 11:00 PM GMT+10
                                    </p>
                                </span>
                            </div>
                            <div className="col-span-3">
                                <img src={metaglasses} alt="OpenAI Logo Green" className="w-full" />
                            </div>
                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 p-2">
                                <p className="rounded-full bg-verge-pink text-black text-xs font-bold font-mpd-jost  w-fit h-fit p-2">E</p>
                                <p className="rounded-full bg-verge-purple text-white text-xs font-bold font-mpd-jost  w-fit h-fit p-2">*</p>
                                <div className="w-3 h-2 bg-gradient-to-b from-verge-pink from-10% to-verge-purple to-90% -translate-y-9 translate-x-1.5 z-50"></div>
                            </div>
                            <div className="col-span-11 p-2">
                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">
                                        Emma Roth
                                    </p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">
                                        Two hours ago
                                    </p>
                                </span>
                                <p className="text-white font-mpd-jost"> <span className="text-white font-verge-oswald text-2xl">
                                    Pokémon Sleep comes to your smartwatch.
                                </span>
                                    &nbsp;The app, which
                                    &nbsp;
                                    <a href="/" className="text-white hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">measures your sleep</a>
                                    &nbsp;with the help of Snorlax and friends, can now help you track your nightly habits with
                                    &nbsp;
                                    <a href="/" className="text-white hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">your Apple Watch</a>
                                    , Galaxy Watch, Pixel Watch, or Fitbit.
                                    <br />
                                    <br />
                                    This should allow for more accurate sleep tracking, as the app
                                    &nbsp;
                                    <a href="/" className="text-white hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">previously had you place</a>
                                    &nbsp;your phone under or beside your pillow to monitor your sleep and snoring.
                                    <br />
                                    <br />
                                    You can now measure your sleep in #PokemonSleep with a #smartwatch!⌚
                                    <br />
                                    <br />
                                    We hope you'll have a more seamless nighttime routine with your Pokémon. ✨ pic.twitter.com/vwlSgkorht
                                    — Pokémon Sleep (@PokemonSleep) September 23, 2024
                                </p>

                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 p-2">
                                <p className="rounded-full bg-verge-pink text-black text-xs font-bold font-mpd-jost  w-fit h-fit p-2">E</p>
                                <p className="rounded-full bg-verge-purple text-white text-xs font-bold font-mpd-jost  w-fit h-fit p-2">*</p>
                                <div className="w-3 h-2 bg-gradient-to-b from-verge-pink from-10% to-verge-purple to-90% -translate-y-9 translate-x-1.5 z-50"></div>
                            </div>
                            <div className="col-span-11 p-2">
                                <span>
                                    <p className="text-xs text-verge-aqua uppercase font-mpd-jost">
                                        Jay Peters
                                    </p>
                                    <p className="font-mpd-jost text-verge-black-600 text-xs uppercase">
                                        An hour ago
                                    </p>
                                </span>
                                <p className="text-white"> <span className="text-white font-verge-oswald text-2xl">
                                    Meta isn’t quite done mixing celebrities and chatbots.
                                </span>
                                    &nbsp; The company has apparently signed deals with Awkwafina, Kristen Bell, John Cena, Judi Dench, and Keegan-Michael Key to voice its AI chatbot, 
                                    <a href="/" className="text-white hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">
                                    &nbsp;
                                    <span className="italic">Reuters</span>
                                    &nbsp;
                                    reports.
                                    </a> 
                                    &nbsp;
                                    The company was rumored to be seeking these deals earlier this year.
                                    <br />
                                    <br />
                                    
                                    Meta may have moved on from 
                                    &nbsp;
                                    <a href="/" className="text-white hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">
                                    celebrity-themed chatbots
                                    </a>
                                    , but given these reported deals, it apparently still sees promise tying big names and AI.
                                    <br />
                                    <br />
                                    <a href="/" className="text-white text-xl font-mpd-jost hover:text-verge-aqua underline underline-offset-2 decoration-verge-aqua">
                                     Exclusive: Meta's AI chatbot to start speaking in the voices of Judi Dench, John Cena, others, source says
                                    </a>
                                    <br />
                                    [<span className="font-mpd-jost font-bold text-verge-black-400 text-xs uppercase">Reuters</span>]
                                    <br />
                    
                                </p>

                            </div>

                            <hr className="border-b-2 border-b-verge-black-600 w-full mt-3 col-span-12" />
                        </div>










                       

                    </div>
                    <div className="section-side col-span-2 lg:col-span-1 bg-verge-purple m-6 p-3 rounded-2xl lg:sticky lg:top-0 h-fit">
                        <h1 className="font-verge-oswald font-extrabold text-black -rotate-90 bottom-0 -translate-y-6 translate-x-40 text-4xl scale-y-[1.7] opacity-30">Most Popular</h1>
                        <h1 className="hidden font-verge-oswald font-extrabold text-black -rotate-90 bottom-0 -translate-y-6 translate-x-40 text-4xl scale-y-[1.7] opacity-30">Most Popular</h1>
                        <p className="text-xs text-white font-mpd-jost">MOST POPULAR</p>
                        <div className="grid grid-cols-12 pb-3 border-b-2 border-b-verge-aqua m-3 ">
                            <div className="col-span-1">
                                <p className="rounded-full bg-purple-950 text-white font-mpd-jost  w-fit h-fit p-2">1</p>
                            </div>
                            <div className="col-span-11">
                                <h1 className="text-2xl text-white font-mpd-jost"> OceanGate’s ill-fated Titan sub relied on a hand-typed Excel spreadsheet</h1>
                                <p className="text-white font-mpd-jost uppercase text-sm"> Andrew Liszewski Sep 20 | 14</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-3 border-b-2 border-b-verge-aqua m-3">
                            <div className="col-span-1">
                                <p className="rounded-full bg-purple-950 text-white font-mpd-jost w-fit h-fit p-2">2</p>
                            </div>
                            <div className="col-span-11">
                                <h1 className="text-2xl text-white font-mpd-jost"> Watch the iPhone 16’s electrically-charged battery replacement process</h1>
                                <p className="text-white font-mpd-jost uppercase text-sm"> Richard Lawler Sep 22 | 7</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-3 border-b-2 border-b-verge-aqua  m-3">
                            <div className="col-span-1">
                                <p className="rounded-full bg-purple-950 text-white font-mpd-jost  w-fit h-fit p-2">3</p>
                            </div>
                            <div className="col-span-11">
                                <h1 className="text-2xl text-white font-mpd-jost">The buttons on Zenith’s original ‘clicker’ remote were a mechanical marvel</h1>
                                <p className="text-white font-mpd-jost uppercase text-sm"> Andrew Marino Jul 29 | 65</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-3 border-b-2 border-b-verge-aqua m-3">
                            <div className="col-span-1">
                                <p className="rounded-full bg-purple-950 text-white font-mpd-jost  w-fit h-fit p-2">4</p>
                            </div>
                            <div className="col-span-11">
                                <h1 className="text-2xl text-white font-mpd-jost"> WhatsApp will send messages to other apps soon — here’s how it will look</h1>
                                <p className="text-white font-mpd-jost uppercase text-sm"> Emma Roth Sep 6 | 52</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-3 border-b-verge-aqua border-b-2 m-3">
                            <div className="col-span-1">
                                <p className="rounded-full bg-purple-950 text-white font-mpd-jost  w-fit h-fit p-2">5</p>
                            </div>
                            <div className="col-span-11">
                                <h1 className="text-2xl text-white font-mpd-jost">Meta has a major opportunity to win the AI hardware race
                                </h1>
                                <p className="text-white font-mpd-jost uppercase text-sm"> Victoria Song Sep 21 | 74</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">

                </div>
            </div>
        </div>
    )
}