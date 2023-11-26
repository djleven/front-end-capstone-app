import Navigation from './Navigation.js';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <header className="App-Header">
            <Navigation isMobile="1" />
            <div className="logo-img">
                <img src={logo} aria-label="logo" className="logo" alt="logo" />
            </div>
            <Navigation />
      </header>
    )
  };
export default Header;
