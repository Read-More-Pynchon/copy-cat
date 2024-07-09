

import './BaseContainer.css';

export default function BaseContainer(props: any) {

    const strip = props.strip;
    const title = props.title;
    const color = props.color;
    const darkMode = props.darkMode;

    let container;
    if(strip){
        container = 
        <>
        <div className={`baseContainer ${darkMode === 'dark' ? 'white' : 'black'}-acc ${darkMode === 'dark' ? 'black' : 'white'}-background-acc`}>
        <div className={`leftTop ${color || 'light-blue'}-background-acc`}></div>
            <div className={`topStrip ${darkMode === 'dark' ? 'black' : 'white'}-acc ${darkMode === 'dark' ? 'white' : 'black'}-background-acc`}>
                <p>{title ? title : ""}</p>
            </div>
            <div className={`contentArea ${darkMode === 'dark' ? 'white' : 'black'}-acc ${darkMode === 'dark' ? 'black' : 'white'}-background-acc`} >
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