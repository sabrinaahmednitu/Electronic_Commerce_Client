const cartReducer = (state, action) => {
  // ADD_TO_CART
  if (action.type === 'ADD_TO_CART') {
    let { id, currentColor, amount, singleProduct } = action.payload;
    // console.log('add to cart', singleProduct);

    //tackel existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id == id + currentColor
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id == id + currentColor) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            //max=stock
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
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
      cart: [],
    };
  }

  //set increment and decrement on cart page
  if (action.type === 'SET_DECREMENT') {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log('matched',curElem);
        let decAmount = curElem.amount - 1;
        //tackel -1
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  //decrement on cart page

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        //tackel outof stock
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }







  return state;
};

export default cartReducer;
