import { NavLink } from "react-router-dom";
import { mainMenuItems } from '../constants.js'

const Nav = ({isMobile, rawOutput}) => {
  let uniqueKeyPrefix = 'a-';
  if(rawOutput) {
    uniqueKeyPrefix = 'c-';
  } else if(isMobile) {
    uniqueKeyPrefix = 'b-';
  }

  const menuItemsHtml = mainMenuItems.map((element, index) => {
    const key = uniqueKeyPrefix + index
    return (
      element.url.includes("#") ?
        <a href={`/${element.url}`} key={key}>
          {element.label}
        </a>
      :
        <NavLink key={key} to={`/${element.url}`}>{element.label}</NavLink>
    )
  });

  if (rawOutput) {
    return menuItemsHtml;
  }

  if (isMobile) {
    return (
      <nav className="App-Mobile-Nav" role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="mobile-menu">
              {menuItemsHtml}
          </ul>
      </div>
    </nav>
    )
  }
  return (
        <nav className="App-Nav" role="navigation">
            <div className="menu-links">
              {menuItemsHtml}
            </div>
        </nav>
    )
  };
export default Nav;
