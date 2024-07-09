

import './BaseContainerWireFrame.css';

export default function BaseContainer(props: any) {

    const strip = props.strip;
    const title = props.title;
    const color = props.color;

    let container;
    if(strip){
        container = 
        <>
        <div className={`baseContainer black-acc 'white-background-acc`}>
        <div className={`leftTop ${color || 'light-blue'}-background-acc`}></div>
            <div className={`topStrip`}>
                <p>{title ? title : ""}</p>
            </div>
            <div className={`contentArea black-acc white-background-acc`} >
                <div className="content-div-acc">
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                </div>
                
            </div>
            <div className="rightBottom white-background-acc right"></div>
        </div>
        </>
        ;
    } else{
        container = 
        <>
        <div className="baseContainer white-acc black-background-acc">
        <div className={`leftTop ${color || 'light-blue'}-background-acc`}></div>
            <div className="contentArea black-background-acc white-acc" >
                <div className="content-div-acc">
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                <p>Content goes here</p>
                </div>
                
            </div>
            <div className="rightBottom white-background-acc right"></div>
        </div>
        </>
        ;
    }

    return container;
    
}