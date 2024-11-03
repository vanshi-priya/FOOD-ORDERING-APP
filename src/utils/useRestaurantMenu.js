// import { useEffect, useState } from "react";
// import { Menu_API} from "../utils/constant";

// const useRestaurantMenu = (resId) =>{
//    const [resInfo, setResInfo] = useState(null);

// useEffect(() => {
//     fetchData();
// }, []);

 
//  const fetchData = async () => {
//     const data = await fetch(Menu_API + resId );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
   
// };

// return resInfo;

// };

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constant"; 


const useRestaurantMenu = (resId) => {
     const [resInfo, setResInfo] = useState(null);

     useEffect(() => {
        fetchData();
     }, []);

     const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
     };
     return resInfo;
};

export default useRestaurantMenu;