/* eslint-disable react/prop-types */
import "./ResCard.css";

const ResCard = ({ res }) => {
  const imgId = res.info.cloudinaryImageId;
  const resName = res.info.name;
  const cuisines = res.info.cuisines.join(", ");
  const areaName = res.info.areaName;
  const discountHeader = res.info.aggregatedDiscountInfoV3.header;
  const discountSubHeader = res.info.aggregatedDiscountInfoV3.subHeader;
  const discountText = discountHeader + " " + discountSubHeader;
  return (
    <div className="res-card">
      <div className="res-img-box">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
          alt={resName}
          className="res-img"
        />
        <p className="discount-text">{discountText}</p>
      </div>

      <p className="res-name">{resName}</p>
      <div className="res-stats">
        <div className="rating-stat">
          <span className="star">⭐</span>
          <span className="rating">3.8</span>
        </div>
        <span className="dot">|</span>
        <eta-stat>25 mins</eta-stat>
      </div>
      <p className="cuisines">{cuisines}</p>
      <address className="location">{areaName}</address>
    </div>
  );
};

export default ResCard;
