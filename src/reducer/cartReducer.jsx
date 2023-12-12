

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, currentColor, amount, singleProduct } = action.payload;
        // console.log('add to cart', singleProduct);
        let cartProduct;

        cartProduct = {
          id: id + currentColor, //id different hobe color er jonne
          name: singleProduct.name,
          color: currentColor,
          amount: amount,
          image: singleProduct.image[0].url,
          price: singleProduct.price,
          max: singleProduct.stock,
        };

        return {
            ...state,
            cart:[...state.cart , cartProduct],
        }
    }
    return state;
};

export default cartReducer;