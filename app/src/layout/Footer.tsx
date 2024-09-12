


export default function Footer(){
        const date = new Date().getFullYear();

        return(
            <footer className="w-full h-fit p-3 bg-blue-light-200 fixed bottom-0">
                <p><span>&copy; </span><time>{date}</time> Borrowed Lines Media</p>
            </footer>
        );

}