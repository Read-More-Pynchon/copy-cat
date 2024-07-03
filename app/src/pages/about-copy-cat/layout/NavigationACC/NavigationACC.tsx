
import '../MainAreaACC/MainAreaACC.css';
import './NavigationACC.css';
export default function NavigationACC() {



    const handleNavItemClick = (navSubMenuId: string) => {

        const subMenu = document.getElementById(navSubMenuId);
        if (subMenu) {
            if (subMenu.style.display === 'none' || subMenu.style.display === '') {
                subMenu.style.display = 'block';
                subMenu.style.height = 'auto';
            } else {
                subMenu.style.display = 'none';
            }
        }
    };


    return (
        <div className="navigation-acc black-background-acc white-acc">
            Navigation - ACC
            <div id="hero-nav" className="white-background-acc blue-acc navItem">
                <p>Hero Ideas</p>
            </div>
            <div id="typography-nav" className="black-background-acc white-acc navItem">
                <p>Typography Ideas</p>
            </div>
            <div id="component-nav" className="blue-background-acc white-acc navItem" onClick={e => handleNavItemClick('component-subMenu')}>
                <p>Component Ideas</p>
            </div>
            <div id="component-subMenu" className="navSubMenu">
                <p className="white-acc navSubItem">Containers</p>
                <p className="white-acc navSubItem">Tokens</p>

            </div>
            <div id="navigation-nav" className="purple-background-acc white-acc navItem">
                <p>Navigation Ideas</p>
            </div>
            <div id="wallpaper-nav" className="light-blue-background-acc black-acc navItem" onClick={e => handleNavItemClick('wallpaper-subMenu')}>
                <a href="wallpaper-ideas">Wallpaper Ideas</a>
            </div>
            <div id="wallpaper-subMenu" className="navSubMenu">
                <p className="white-acc navSubItem">Checkerboards</p>
                <p className="white-acc navSubItem">Scattered Squares</p>
            </div>
            <div id="animation-nav" className="pink-background-acc black-acc navItem">
                <p>Animation Ideas</p>
            </div>
        </div>
    )
}