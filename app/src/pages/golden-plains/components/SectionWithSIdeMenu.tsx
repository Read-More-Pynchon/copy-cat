import { ReactNode } from "react"


export interface SectionWithSideMenuProps{
    title: string,
    menuItems: string[],
    children: ReactNode
}


export default function SectionWithSideMenu(props: any){



    return(
        <div>
            <p>Side Menu</p>
            {props.children}
        </div>
    )
}