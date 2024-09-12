


import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation/Navigation';
import Main from './Main';

export default function Layout() {



    return (
        <div className="bg-near-black p-3">
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </div >
    )
}