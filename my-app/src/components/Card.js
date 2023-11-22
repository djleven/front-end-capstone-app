const Card = ({ title, price, description, imageSrc }) => {
    const seeMoreText = 'Order a delivery';
  return (
      <div className='card'>
          <div className="card-image-content">
              <img
                  src={imageSrc}
                  alt={title}
              />
          </div>
          <div className="card-text-content">
            <div className="content-header">
                <h5>
                  {title}
                </h5>
                <span>
                  {price}
                </span>
            </div>
              <p>
                  {description}
              </p>
              <div className='more-link'>
                  <button className="button">
                      {seeMoreText}
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Card;
