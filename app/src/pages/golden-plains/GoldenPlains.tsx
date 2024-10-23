import PageContainer from "./layout/PageContainer";




export default function GoldenPlains() {



    return (
        <div>
            <div className="bg-rouge rounded-3xl m-3 p-3">
                <h1 className="text-3xl font-extrabold text-near-white font-rm-noto">Golden Plains 2025</h1>
                <p className="pb-6">Please find the link to the actual site below:</p>
                <a href="https://goldenplains.com.au"
                    className="underline underline-offset-8 decoration-rm-orange font-rm-noto text-purple"
                    target="_blank" rel="noreferrer">
                    Golden Plains 2025 site - release 16 October 2024
                </a>
                <br />
                <hr className="border-4 border-rm-purple mt-3 mb-3" />
                <p>Please note: this is in progress - obviously I can't recreate the whole site... but in this case I am trying to complete the routing and most of the Content.
                    <br />
                    Love ya.
                </p>
            </div>
            <hr />
            <div className="bg-black">
                <p className="text-white text-xs font-rm-noto text-center">Content below</p>
            </div>
            <hr />
            <PageContainer />
            <div className="h-24 w-full">

            </div>
        </div>
    )

}