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
        <nav className="App-Mobile-Nav" role="navigation">
            <div class="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul class="mobile-menu">
                    {menuItemsHtml}
                </ul>
            </div>

        </nav>
    )
  };
export default Nav;
