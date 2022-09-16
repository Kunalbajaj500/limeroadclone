export const reducer = (state, action) => {
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      item: state.item.filter((curElement) => {
        return curElement.id !== action.payload;
      }),
    };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, item: [] };
  }

  if (action.type === 'INCREMENT') {
    let updatedCart = state.item.map((curElement) => {
      if (curElement.id === action.payload) {
        return { ...curElement, quantity: curElement.quantity + 1 };
      }
      return curElement;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === 'DECREMENT') {
    let updatedCart = state.item.map((curElement) => {
      if (curElement.id === action.payload) {
        return { ...curElement, quantity: curElement.quantity - 1 };
      }
      return curElement;
    
    })
    .filter((curElement)=> curElement.quantity !== 0
    ) 
    return { ...state, item: updatedCart };
  }
//   if(action.type === "GET_TOTAL"){
// let {totalItem} = state.item.reducer(
//   (accum ,curVal)=>{
// let {quantity} =curVal;
// accum.totalItem +=quantity
// return accum

// },
// {
//   totalItem: 0
// }
// );
// return {...state ,totalItem}
//   }

  return state;
};





















