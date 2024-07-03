


import './SectionWrapperACC.css';

export default function SectionWrapperACC(props: any, children: any) {

    const color = props.color;
    const backgroundColor = props.backgroundColor;

    return (
        <div className={`section-wrapper-acc ${color} ${backgroundColor}`}>
           
        </div>
    )

}