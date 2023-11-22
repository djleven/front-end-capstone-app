import Testimonial from "./Testimonial.js";
import reviewer1 from "../assets/images/Reviewer1.png";
import reviewer2 from "../assets/images/Reviewer2.png";
import reviewer3 from "../assets/images/Reviewer3.png";
import reviewer4 from "../assets/images/Reviewer4.png";

const Highlights = () => {

  const testimonials = [
    {
        name: "Mary Jane",
        rating: "8.4",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is the industry's standard.",
        img: reviewer1
      },
    {
        name: "Sean",
        rating: "9.0",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is the industry's standard.",
        img: reviewer2
      },
      {
        name: "Jonathan",
        rating: "9,7",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is the industry's standard.",
        img: reviewer3
      },
      {
        name: "Ken",
        rating: "9.5",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is the industry's standard.",
        img: reviewer4
      }
  ];

    const menuItemsHtml = testimonials.map((reviewer) => {
        return (
            <Testimonial
                name={reviewer.name}
                imageSrc={reviewer.img}
                rating={reviewer.rating}
                text={reviewer.text}
            />
        )
    });

  return (
      <section className="App-Testimonials">
        <div className="specials-header">
            <h3>Testimonials</h3>
            </div>
            <div className="reviews">
                {menuItemsHtml}
            </div>
      </section>
  )
};
export default Highlights;
