import "./Card_Produc.css";
import Product from "../../Assets/Product.png";

function Card_Prod() {
  return (
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">
          <div className="card__badge">NEW</div>
          <div className="card__image" >
            <img className="Image_Product" src={Product} alt="Product" />
          </div>
          <div className="card__text">
            <p className="card__title">Premium Design</p>
            <p className="card__description">Hover to reveal stunning effects</p>
          </div>
          <div className="card__footer">
            <div className="card__price">$49.99</div>
            <div className="card__button">
              <svg height={16} width={16} viewBox="0 0 24 24">
                <path strokeWidth={2} stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card_Prod;
