
import copyCatLogo from '../assets/copyCatLogo.png';

export default function Header(){

    return(
        <>
         <div className="p-2 w-full h-fit bg-near-black">
                <div className="float-start">
                    <img className="w-20 h-20" src={copyCatLogo} alt="copy-cat-logo"></img>
                </div>
                <div className="h-5 float-end">
                    <h1 className="text-near-white text-3xl">Copy Cat</h1>
                    <h2 className="text-near-white text-2xl">Borrowed Lines Media</h2>
                </div>
            </div>
        </>
    )
}