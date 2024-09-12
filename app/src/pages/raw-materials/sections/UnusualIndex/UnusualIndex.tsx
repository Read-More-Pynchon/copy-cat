
import unusualImage from '../../assets/unusual-index-media-block-1.svg';
import SectionRM from '../../components/SectionRM';

export default function UnusualIndex() {

    return (
        <>
            <SectionRM index="07" title={'Unusual Index'}>
                <div className="h-3"></div>
                <img src={unusualImage} alt="Unusual Index" className="w-full"></img>
                <div className="h-3"></div>
                <div className="rounded bg-rm-green p-24">
                    <p className="text-black text-6xl lg:text-9xl xl:text-9xl font-rm-noto">
                        The (Unusual) Index is our compendium of unusually great products, people, and ideas that inspire us to think differently.
                    </p>

                </div>
                <div>

                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 lg:col-span-10 rounded-full p-3 bg-rm-linen border-solid border-gray m-1">
                        <p className="font-rm-noto text-3xl text-gray text-center">NOTACULT@THERAWMATERIALS.COM</p>
                    </div>
                    <div className="col-span-6 lg:col-span-2 rounded-full bg-rm-green m-1">
                        <p className="text-black text-2xl text-center font-rm-noto p-3">SUBSCRIBE</p>
                    </div>
                </div>
            </SectionRM>

        </>
    )
}