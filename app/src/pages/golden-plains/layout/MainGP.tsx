

import logo from '../assets/logos/logo.png';
import sup from '../assets/photos/sup-amp-1185x1080.jpg';
import greenLight from '../assets/photos/green-light.jpg';
import Hero from '../components/Hero';
import WhosPlaying from '../sections/WhosPlaying/WhosPlaying';

export default function MainGP() {

   

    return (
        <div className="font-gp-text text-gp-green text-center my-3">
            
            
            <Hero />
            <p className="font-bold uppercase">March 8, 9 & 10, 2025
                Meredith Supernatural
                Amphitheatre</p>
            <br />
            <div className="mb-48 md:text-3xl font-bold">
                <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto">
                    LET GOLDEN SHAKE
                </h1>

                <br />
                <p className="text-center my-3 ">
                    Party largesse on the Plains.
                </p>

                <p className="text-center my-3">
                    The drape has dropped to reveal the <span className="border-1 border-gp-red p-1 text-gp-red">LINEUP</span>  for GPXVII.
                </p>
                <p className="text-center my-3">
                    The Second Round of the Ballot is now open.
                </p>
                <div className="border-1 border-gp-red p-1 text-gp-red text-center text-3xl font-bold m-auto w-fit">ENTER THE BALLOT</div>
                <p className="text-center my-3">
                    Simple to enter, open to all-comers, the best way to get tickets.
                </p>
                <p className="text-center my-3">
                    Enter before 10:17pm AEDT, Monday 21 October.
                </p>
                <p className="">
                    <span className="border-1 border-gp-red p-1 text-gp-red">VOLUNTEER APPLICATIONS</span> are closing soon.
                </p>
            </div>
            <div>
                <img src={sup} alt="THe Supernatural Amphitheatre" className="w-full h-auto" />
            </div>

            <div className="mb-48 mt-24 md:text-3xl font-bold grid grid-cols-12">
                <div className="hidden md:block md:col-span-3">

                </div>
                <div className="col-span-12 md:col-span-6 md:text-3xl font-bold">

                    <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto mt-24">
                        BUSH COMMUNION
                    </h1>
                    <br />
                    <p className="text-center my-3">
                        Time and space to wibble. A soundtrack built for wobble.
                    </p>
                    <br />
                    <p className="text-center my-3">
                        Music and nature, sense and non-sense.
                    </p>
                    <br />
                    <p className="text-center my-3">
                        Right size, right shape, with no commercial sponsors, free range camping, BYO, the No Dickhead Policy, and One Stage that fits all.
                    </p>
                </div>
                <div className="hidden md:block md:col-span-3">

                </div>
            </div>
             <WhosPlaying />
            <div className="h-48"></div>

            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                <img src="https://content.mmf.com.au/wp-content/uploads/sites/24/2024/09/GP2025_OsloDavis_NL1_3.gif?x58291" 
                    alt="Oslo Gif trial second"
                    className="w-full h-auto bg-transparent" />
                    <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto">
                        FUNDAMENTAL
                    </h1>

                    <div className="">
                        <p>The first Golden rolled out in 2007 but The Sup’ itself has been natured and nurtured over 33 years for the sole purpose of hosting Something Truly Remarkable.</p>
                        <br />
                        <p>The more things change, the more they stay the same.</p>
                        <br />
                        <p> It’s one of the best places on earth to spend a long weekend with friends and lovers – losing yourself, finding yourself, and losing yourself again.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                <img src="https://content.mmf.com.au/wp-content/uploads/sites/24/2024/09/GP2025_OsloDavis_NL1_1.gif?x58291" alt="Oslo Gif trial first"
                    className="w-full h-auto bg-transparent" />
                    <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto">LOCAL KNOWLEDGE</h1>
                    <p>
                        Every ticket assists regional organisations doing great work in the district. At the festival, nourishment from the Tucker Tent helps good things happen for many local groups.

                        We are grateful to the wonderful town of Meredith and surrounding areas who so graciously help host Golden Plains.
                    </p>
                </div>
            </div>
            <div className="h-48"></div>
            <img src={greenLight} alt="Green Light" className="opacity-40 w-full h-auto rounded" />

            <div className="h-48"></div>
            <div className="grid grid-cols-12">
                <div className="hidden md:block md:col-span-4">
                   
                    <img src="https://content.mmf.com.au/wp-content/uploads/sites/24/2024/09/GP2025_OsloDavis_NL1_1.gif?x58291" alt="Oslo Gif trial first"
                    className="w-full h-auto bg-transparent" />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <h1 className="font-gp-title text-gp-red text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center m-auto">GOLDEN HALLMARK</h1>

                    <p>Golden Plains comes with a Lifetime Guarantee. We promise we will continue to listen, fix things if they’re broken, not fix them if they ain’t, and keep on making Golden golden.</p>
                    <br />
                    <p> Write to me about anything, anytime.</p>
                    <br />
                    <p> I hope to enjoy the pleasure of your company this March.</p>
                </div>
                <div className="hidden md:block md:col-span-4">
                   
                    <img src="https://content.mmf.com.au/wp-content/uploads/sites/24/2024/09/GP2025_OsloDavis_NL1_3.gif?x58291" 
                    alt="Oslo Gif trial second"
                    className="w-full h-auto bg-transparent" />
                </div>

            </div>

        </div>
    )
}