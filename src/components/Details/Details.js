import React, { useContext } from "react";
import { productsContext } from "../../context/ProductsContext";

const Details = () => {

    const { detailsData } = useContext(productsContext);

    return (
        <div>
            {detailsData ? (
                <div className="container">
                <div className="grid-detail">
                   <span>
                      <img style={{width: "600px"}} src={detailsData.img1} style={{width: "400px"}} alt="watch" className="detail-size"/>
                   </span>
                   <span className="detail-block">
                      <h2>{detailsData.name}</h2>
                      <p>{detailsData.material}, {detailsData.color}, {detailsData.material}</p>
                   </span>
                </div>
                <div>
                   <h2 className="title">Description</h2>
                   <p className="paragraf">{detailsData.description}</p>
                   <ul classname="list">
                      <li>Color: {detailsData.color}</li>
                      <li>Material: {detailsData.material}</li>
                      <li>Made in: {detailsData.madeIn}</li>
                   </ul>
                </div>
             </div>
            ) : (
                <h1>loading</h1>
            )}
        </div>
    );
};

export default Details;
