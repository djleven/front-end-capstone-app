const Testimonial = ({ name, rating, text, imageSrc }) => {
    const seeMoreText = 'Order a delivery';
  return (
      <div className='testimonial'>
          <div className="testimonial-image-content">
              <img
                  src={imageSrc}
                  alt={name}
              />
          </div>
          <div className="testimonial-text-content">
            <div className="content-header">
                <h5>
                  {name}
                </h5>
                <span>
                  {rating}
                </span>
            </div>
              <p>
                  {text}
              </p>
          </div>
      </div>
  );
};

export default Testimonial;
