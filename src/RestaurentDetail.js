import React, { useEffect, useState } from "react";
import { FETCH_RUL } from "./Constant";

import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constant";
import "./App.css";
import useRestaurant, { getRestaurant } from "./Utils/useRestaurant";

const RestaurentDetail = () => {
  const [restaurantmenu, setrestarantmenu] = useState();
  const { resId } = useParams();
  // const restaurantmenu = useRestaurant(resId)

  useEffect(() => {
    const getRestaurant = async (resId) => {
      const data = await fetch(`${FETCH_RUL}${resId}`);
      const restarant = await data.json();
      const itemsData = restarant.data.menu.items;
      if (typeof Object.values(itemsData) !== undefined) {
        setrestarantmenu(Object.values(itemsData));
      }
    };
    getRestaurant(resId);
  }, [resId]);
  return (
    <div className="menu">
      {
        <div>
          {/* <h1>restaurant id:{resId}</h1>
           <h2>{restaurantmenu?.name}</h2>
           <img src={IMG_CDN_URL + restaurantmenu?.cloudinaryImageId} />
           <h3>{restaurantmenu?.area}</h3>
           <h3>{restaurantmenu?.city}</h3>
           <h3>{restaurantmenu?.avgRating} stars</h3>
           <h3>{restaurantmenu?.costForTwoMsg}</h3>
           <h3>{restaurantmenu?.type}</h3> */}
        </div>
      }
      <div className="border p-6 space-y-2">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <ul>
          {restaurantmenu?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentDetail;
