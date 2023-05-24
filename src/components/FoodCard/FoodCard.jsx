import React from "react";

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="bg-slate-700 text-white absolute right-5 top-3 px-2 rounded-full">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
