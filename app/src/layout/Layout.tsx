


import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';

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