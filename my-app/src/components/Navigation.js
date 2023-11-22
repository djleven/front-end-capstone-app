import { mainMenuItems } from '../constants.js'

  const menuItemsHtml = mainMenuItems.map((element, index) => {
    return (
        <a href={`#${element.url}`} key={index}>
          {element.label}
        </a>
    )
  });

const Nav = () => {
    return (
        <nav className="App-Nav" role="navigation">
            <div className="menu-links">
              {menuItemsHtml}
            </div>
        </nav>
    )
  };
export default Nav;
