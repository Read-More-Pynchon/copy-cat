import React, { ReactNode } from "react"

interface MainAreaVProps{
    children: ReactNode
}


export default function MainAreaV(props: MainAreaVProps) {




    return (
        <div className="bg-verge-black h-screen min-h-full w-full">
            {props.children}
        </div>
    )
}