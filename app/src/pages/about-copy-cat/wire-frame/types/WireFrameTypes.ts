
export interface colorWireFrame {
    name: string,
    foreground: string,
    background: string
}


export type QuarterSquareWireFrameProps = {
    color: colorWireFrame,
    align: string,
    key: string,
    label: string
}

export type TitleSquareWireFrameProps= {
    title: string,
    color: colorWireFrame
}

export type SectionWireFrameType =  {
    label: string,
    title: string,
    color: colorWireFrame,
    content?: {},
    subsections?: SectionWireFrameType[],
}