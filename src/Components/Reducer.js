export const initialState = {
  basket: [],
};

export const getTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };


//Remove from the basket functionality 
      case "REMOVE_FROM_BASKET":
      //catching the index that we click
      const index = state.basket.findIndex(
        (basketItem)=>basketItem.id ===action.id
      )
       //copying the basekt item into newbasket
      let newBasket = [...state.basket];


        //removing the item of same index that we click from newBasket
      if (index>=0){
        newBasket.splice(index,1); //removing the item from index number
      }else{
        console.warn(
          `cannot remove product ${action.id} not found`
        )
      }
      return{
        ...state,
        basket: newBasket

      }



    default:
      return state;
  }
};

export default reducer;
