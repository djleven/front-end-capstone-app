import Card from "./Card.js";
import salad from "../assets/images/salad.jpg";
import dessert from "../assets/images/dessert.jpg";
import bruchetta from "../assets/images/bruchetta.jpg";


export const dishes = [
    {
        label: "Greek Salad",
        url: "greek_salad",
        price: "$12.99",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: salad
      },
    {
        label: "Bruchetta",
        url: "about",
        price: "$8.99",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        img: bruchetta
      },
      {
        label: "Lemon Dessert",
        url: "lemon_dessert",
        price: "$4.99",
        desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img: dessert
      }
  ];

const Highlights = () => {

    const menuItemsHtml = dishes.map((dish) => {
        return (
            <Card
                title={dish.label}
                imageSrc={dish.img}
                price={dish.price}
                description={dish.desc}
            />
        )
    });

  return (
      <section className="App-Highlights">
        <div className="specials-header">
            <h3>Specials</h3>
            <button className="button dark">
                Online Menu
                </button>
            </div>
            <div className="dishes">
                {menuItemsHtml}
            </div>
      </section>
  )
};
export default Highlights;
