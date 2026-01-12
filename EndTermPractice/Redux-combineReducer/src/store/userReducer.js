const INITIAL_VALUE = {
  name: "",
  email: ""
}

const userReducer = (state=INITIAL_VALUE,action)=>{
  if(action.type==='SET_USER'){
    console.log(action.payload);
    return {...state, name:action.payload.name,email:action.payload.email};
  }
  return state;
}

export default userReducer;