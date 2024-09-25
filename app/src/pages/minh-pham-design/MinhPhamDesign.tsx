import MainArea from "./layout/MainAreaMPD/MainAreaMPD";

export default function MinhPhamDesign() {





    return (
        <>
            <div className="bg-rm-green rounded-3xl m-3 p-3">
                <h1 className="text-3xl font-extrabold text-near-white font-rm-noto">Minh Pham Design</h1>
                <p className="pb-6">Please find the link to the actual site below:</p>
                <a href="https://minhpham.design/" 
                className="underline underline-offset-8 decoration-rm-orange font-rm-noto text-purple" 
                target="_blank" rel="noreferrer">
                    Minh Pham Design Site
                    </a>
                <br />
                <hr className="border-4 border-rm-purple mt-3 mb-3" />
                <p>Please note: this is in progress - obviously I can't recreate the whole site... but lets get it closer to the truth. Love ya.</p>
            </div>
            <hr />
            <div className="bg-black">
                <p className="text-white text-xs font-rm-noto text-center">Content below</p>
            </div>
            <hr />
            <MainArea />
        </>
    )
}