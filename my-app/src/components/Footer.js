import logo from '../assets/images/logo-footer.png';
import { mainMenuItems } from '../constants.js'

const addressItems = [
    {
        label: "19/20 Royal Hibernian Way,",
      },
      {
        label: "Duke Lane Upper,",
      },
      {
        label: "Dublin, D02 K772",
      },
      {
        label: "Get Directions",
        url: "https://maps.app.goo.gl/vAVNMt13WeY1kXKW6",
      },
    {
        label: "Call Us",
        url: "tel:+35319058777",
      },
      {
        label: "Email Us",
        url: "mailto:info@littlelemon.ie",
      },
  ];

  const menuItemsHtml = mainMenuItems.map((element, index) => {
    return (
        <a href={`#${element.url}`} key={index}>
          {element.label}
        </a>
    )
  });

  const contactItemsHtml = addressItems.map((element, index) => {
    return (
        element.url ?
        <a href={`${element.url}`} key={index} target="_blank">
          {element.label}
        </a>
        : <span>{element.label}</span>
    )
  });

const Footer = () => {
    return (
        <footer className="App-Footer">
               <div className="logo-img">
                <img src={logo} role="logo" className="logo" alt="logo" />
            </div>
            <div className="menu-links">
              {menuItemsHtml}
              </div>
              <div className="menu-links contact">
              {contactItemsHtml}
              </div>
              <div className="menu-links">
              {menuItemsHtml}
              </div>
        </footer>
    )
  };

export default Footer;