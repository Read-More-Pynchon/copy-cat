import { ReactNode } from "react"


interface SectionRMProps {
    index: string,
    title: string,
    children: ReactNode
}



export default function SectionRM(props: SectionRMProps) {

    const bullet = `${'\u2022'}`;
    const descriptor = `You are now entering (${props.title}) section               .`;
    const counter = ` ${props.index} / 01`;

    switch (props.index) {
        case '01':
            return (
            <>
                <div className="rounded-full bg-rm-orange w-full pt-1 mb-6">
                    <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                        {descriptor}
                    </p>
                    <p className="text-sm text-black font-rm-noto text-right pr-7">
                        <span className="text-3xl">{bullet}</span> {counter}
                    </p>
                </div>
                <div className="rounded-xl bg-rm-orange text-white mt-3 pt-1 mb-1">
                    <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                    <div className="h-48"></div>
                    <h1 className="text-9xl lg:text-9xl font-rm-noto text-white font-medium left p-12">{props.title}</h1>
    
                </div>
                <div>
                    {props.children}
                </div>
    
            </>
        );
        case '02':
            return (
                <>
                    <div className="rounded-full bg-rm-purple w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-black font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-purple text-white mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-white left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        case '03':
            return (
                <>
                    <div className="rounded-full bg-black w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-black font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-black text-white mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-white left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        case '04':
            return (
                <>
                    <div className="rounded-full bg-rm-blue w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-black font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-blue text-white mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-white left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        case '05':
            return (
                <>
                    <div className="rounded-full bg-rm-red w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-black font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-red text-white mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-white left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        case '06':
            return (
                <>
                    <div className="rounded-full bg-rm-yellow w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-black font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-black font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-yellow text-black mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-black left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-black left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        case '07':
            return (
                <>
                    <div className="rounded-full bg-rm-green w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-black font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-blac font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-green text-black mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-black left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-black left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
        default:
            return (
                <>
                    <div className="rounded-full bg-rm-blue w-full pt-1 mb-6">
                        <p className="text-sm font-semibold text-white font-rm-noto text-left pl-7">
                            {descriptor}
                        </p>
                        <p className="text-sm text-blac font-rm-noto text-right pr-7">
                            <span className="text-3xl">{bullet}</span> {counter}
                        </p>
                    </div>
                    <div className="rounded-xl bg-rm-blue text-white mt-3 pt-1 mb-1">
                        <h1 className="text-6xl lg:text-9xl font-rm-noto text-white left p-12">{props.index}</h1>
                        <div className="h-48"></div>
                        <h1 className="text-9xl lg:text-9xl font-rm-noto text-white left p-12">{props.title}</h1>
        
                    </div>
                    <div>
                        {props.children}
                    </div>
        
                </>
            );
    }
    //Add the switch here with 7 different returns - remember no dynamic in ht class name.

   
}