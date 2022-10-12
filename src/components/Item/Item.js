import React from 'react';
import { Link } from "react-router-dom";

const Item = ({item}) => {
  return (

<div className="max-w-sm">
  <div className="flex rounded-lg border h-[500px] w-[300px] border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
    <img alt={item.title} className="rounded-t-lg h-[300px] object-contain" src={item.pictureUrl}/>
    <div className="flex h-full flex-col justify-center gap-4 p-6">
      <Link to={"/producto/" + item.id }>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
      </Link>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price}$</span>
        <Link to={"/producto/" + item.id }>
          <button className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Ver detalles</button>
        </Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Item;