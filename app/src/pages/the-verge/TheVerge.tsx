import FooterV from "./layout/FooterV";
import HeaderV from "./layout/HeaderV";
import MainAreaV from "./layout/MainAreaV";
import Creators from "./sections/Creators";
import Entertainment from "./sections/Entertainment";
import FrontPage from "./sections/FrontPage";
import MostPopular from "./sections/MostPopular";
import Podcasts from "./sections/Podcasts";
import Science from "./sections/Science";
import Tech from "./sections/Tech";

export default function TheVerge() {


    return (
        <>
            <div className="bg-rm-orange rounded-3xl m-3 p-3">
                <h1 className="text-3xl font-extrabold text-near-black-950 font-rm-noto">The Verge</h1>
                <p className="pb-6">Please find the link to the actual site below:</p>
                <a href="https://www.theverge.com/" className="underline underline-offset-8 decoration-rm-purple font-rm-noto text-near-white hover:text-rm-purple" target="_blank" rel="noreferrer">The Verge website</a>
                <br />
                <hr className="border-4 border-rm-purple mt-3 mb-3" />
                <p>Please note: this is in progress - obviously I can't recreate the whole site... but lets get it closer to the truth. Love ya.</p>
            </div>
            <hr />
            <div className="bg-black">
                <p className="text-white text-xs font-rm-noto text-center">Content below</p>
            </div>
            <hr />
            
            <div className="bg-verge-black">
                <HeaderV />

                <MainAreaV>
                    <FrontPage />
                    <MostPopular />
                    <Tech />
                    <Podcasts />
                    <Science />
                    <Creators />
                    <Entertainment />
                    <div className="h-96 w-full bg-verge-black">

                    </div>
                    <FooterV />
                </MainAreaV>


            </div>
        </>
    )
}