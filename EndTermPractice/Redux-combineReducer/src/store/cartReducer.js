const INITIAL_VALUE = {
  arr : []
}

const cartReducer = (state=INITIAL_VALUE,action)=>{
  if(action.type==='ADD'){
    console.log(action.payload);
    return {
      ...state,
      arr: [...state.arr, action.payload.cart]
    }
  }
  if(action.type==='DELETE'){
    return{
      ...state,
      arr : state.arr.filter((item)=> item!== action.payload.item)
    }
  }
  return state;
}

export default cartReducer;