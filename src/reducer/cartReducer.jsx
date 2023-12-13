const cartReducer = (state, action) => {
  // ADD_TO_CART
  if (action.type === 'ADD_TO_CART') {
    let { id, currentColor, amount, singleProduct } = action.payload;
    // console.log('add to cart', singleProduct);
  
    //tackel existing product
    let existingProduct = state.cart.find((curItem) => curItem.id = id + currentColor);
    
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id = id + currentColor) {
          let newAmount = curElem.amount + amount;
          // if (newAmount >= curElem.max) { //max=stock
          //   newAmount=curElem.max
          // }
           return {
             ...curElem,
             amount: newAmount,
           };
        }
        else {
            return curElem
        }
       
      })
       return {
         ...state,
         cart: updatedProduct
       };
    } else {
      let cartProduct = {
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
        cart: [...state.cart, cartProduct],
      };
    }
    }



  // REMOVE ITEM
  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  //remove all cart 
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart:[],
    }
  }
  
  
  return state;
};

export default cartReducer;
