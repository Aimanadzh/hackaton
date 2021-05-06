import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import { calcTotalPrice } from "../../helpers/CalcPrice";
import { Link } from "react-router-dom";


const Cart = () => {
    const { getCart, cart, changeProductCount, deleteFromCart } = useContext(
        productsContext
    );

    useEffect(() => {
        getCart();
    }, []);


    return (
        <div className="cart">
            <h1>Shopping cart</h1>
            {cart?.products ? (
                <div>
                    {" "}
                    {cart.products.map((elem) => (
                        <div className="items">
                            <div>
                                <img className="img_product" src={elem.item.img1} style={{"width":"150px"}} />
                            </div>
                            <div className="item">
                                {" "}
                                <div className="name">
                                    Name: {elem.item.name}
                                </div>
                                <div className="price">
                                    Price: {elem.item.price}
                                </div>
                            </div>
                            <div className="item_count">
                                <div className="count">Count: </div>
                                <input
                                    className="item_count"
                                    onChange={(e) =>
                                        changeProductCount(
                                            e.target.value,
                                            elem.item.id
                                        )
                                    }
                                    type="number"
                                    value={elem.count}
                                />
                            </div>
                            <div className="subprice">
                                <div className="price_subprice">
                                    {" "}
                                    <div className="item_subprice">
                                        SubPrice:{" "}
                                    </div>
                                    <div>$ {elem.subPrice} </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            deleteFromCart(elem.item.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h4>
                        Total: ${" "} {calcTotalPrice(cart.products)} 
                        <Link to="/payment">
                            <button className="buy-btn">Buy</button>
                        </Link>
                    </h4>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};
export default Cart;