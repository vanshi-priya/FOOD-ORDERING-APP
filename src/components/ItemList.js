import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    return ( 
      <div>
        {items.map((item) =>(
        <div key={item.card.info.id} className="p-2 m-2 border-gray border-b-2 text-left flex justify-between">
        <div className="w-9/12">
        <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
                -₹
                {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}</span>
         </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4" > 
            <div className="absolute">
            <button className="px-5 mx-8 my-25 bg-white text-green-600 border rounded-lg py-2 font-bold" onClick={() => handleAddItem(item)}> Add + </button> 
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
        </div>
        ))}
    </div>
    

    );  
};

export default ItemList;