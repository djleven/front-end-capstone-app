import Navigation from './Navigation.js';
import logo from '../assets/images/logo-footer.png';

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


const socialMediaItems = [
  {
      label: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      label: "facebook",
      url: "https://www.facebook.com/",
    },
    {
      label: "twitter",
      url: "https://twitter.com/",
    },
];

function createLinks(items) {
  return items.map((element, index) => {
    return (
        element.url ?
        <a href={`${element.url}`} key={index} target="_blank" rel="noreferrer">
          {element.label}
        </a>
        : <span key={index}>{element.label}</span>
    )
  });
}

const Footer = () => {
    return (
        <footer className="App-Footer">
            <div className="logo-img">
              <img src={logo} aria-label="logo" className="logo" alt="logo" />
            </div>
            <div className="menu-links main">
              <Navigation rawOutput="1" />
            </div>
            <div className="menu-links contact">
              {createLinks(addressItems)}
              </div>
            <div className="menu-links social">
              {createLinks(socialMediaItems)}
            </div>
        </footer>
    )
  };

export default Footer;