import MobileNavigation from './MobileNavigation.js';
import Navigation from './Navigation.js';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <header className="App-Header">
            <MobileNavigation />
            <div className="logo-img">
                <img src={logo} role="logo" className="logo" alt="logo" />
            </div>
            <Navigation />
      </header>
    )
  };
export default Header;
