import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Testimonials from "./Testimonials.js";
import hero_image from "../assets/images/restaurantfood.jpg";
import chef_image from "../assets/images/Mario_and_Adrian.jpg";

const Main = () => {
  const desc = 'The family owned Little Lemon restaurant prides itself in offering delicious traditional Mediterranean recipes served with a modern twist. Located in the heart of Dublin.'

    return (
        <main className="App-Main">
          <Hero
            className="cta"
            title="Little Lemon"
            subtitle="Dublin"
            description={desc}
          >
            <Hero.Action>
              <button className="button">
                Reserve a table
              </button>
            </Hero.Action>
            <Hero.Image>
              <img src={hero_image} alt="restaurant image"/>
            </Hero.Image>
          </Hero>

          <Highlights />
          <Testimonials />

          <Hero
            className="about dark"
            title="Little Lemon"
            subtitle="Dublin"
            description={desc}
          >
            <Hero.Action>
            </Hero.Action>
            <Hero.Image>
              <img src={chef_image} alt="about us image"/>
            </Hero.Image>
          </Hero>
        </main>
    )
  };
export default Main;
