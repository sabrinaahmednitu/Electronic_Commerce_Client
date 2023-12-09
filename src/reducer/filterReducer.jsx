const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };

    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };

    //------------for sorting start--------------
    case 'GET_SORT_VALUE':
      // let userSortValue = document.getElementById('sort');
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case 'SORTING_PRODUCTS':
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        //for lowest price sort
        if (state.sorting_value === 'lowest') {
          return a.price - b.price;
        }

        //for highest price sorting
        if (state.sorting_value === 'highest') {
          return b.price - a.price;
        }
        //for a-z sorting
        if (state.sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }
        //for z-a sorting
        if (state.sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
      };

      //for lowest price sort
      // if (state.sorting_value === 'lowest') {
      //   const sortingProducts = (a, b) => {
      //     return a.price - b.price;
      //   };

      // }

      //for highest price sorting
      // if (state.sorting_value === 'highest') {
      //   const sortingProducts = (a, b) => {
      //     return b.price - a.price;
      //   };

      // }

      //for a-z sorting
      // if (state.sorting_value === 'a-z') {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   );
      // }

      //for z-a sorting
      // if (state.sorting_value === 'z-a') {
      //   newSortData = tempSortProduct.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    //----------for sorting end-------------

    //--------------search part--------------
    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case 'FILTER_PRODUCTS':
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text , category } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        })
      }
      if (category) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

       return {
         ...state,
         filter_products: tempFilterProduct,
       };
    //--------------search part end--------------

    default:
      return state;
  }
};

export default filterReducer;
