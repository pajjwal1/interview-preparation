import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removetoCart, clearCart } from "./action";
import Header from "./Header";
import { productListing } from "./productAction";
import { useEffect } from "react";

function MainComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(productListing());
  }, []);
  return (
    <div>
      <Header />
      <button onClick={() => dispatch(clearCart())}>clear Cart</button>
      <div className="product-container">
        {data.map((element) => {
          return (
            <div className="product-item" key={element.id}>
              <img
                src={element.photo}
                style={{ height: "150px", width: "150px" }}
                alt=""
              />
              <div>Name : {element.name}</div>
              <div>Price: {element.price}</div>
              <div>Color: {element.color}</div>
              <div>Brand: {element.brand}</div>
              <div>Category: {element.category}</div>
              <div>
                <button onClick={() => dispatch(addtoCart(element))}>
                  Add to cart
                </button>
                <button onClick={() => dispatch(removetoCart(element.id))}>
                  Remove To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainComponent;
