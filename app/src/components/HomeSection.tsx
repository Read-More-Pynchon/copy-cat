import { ReactNode } from 'react';

interface HomeSectionProps{
    children: ReactNode
}


export default function HomeSection(props: HomeSectionProps){

    return(
        <div className="pt-16 pb-16">
            {props.children}
        </div>
    )
}