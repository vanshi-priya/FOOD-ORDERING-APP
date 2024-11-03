import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const deliveryTime = resData?.info?.sla?.deliveryTime || "N/A";
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 h-[435px] w-[254px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 transition-transform duration-200 hover:scale-95">
      <img
        className="rounded-lg h-40 w-[100%]"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} 🌟stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 z-10 rounded-lg transition-transform duration-200 hover:scale-95">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
