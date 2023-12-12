

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, currentColor, amount, singleProduct } = action.payload;
        console.log('add te cart', singleProduct);
    }
    return state;
};

export default cartReducer;