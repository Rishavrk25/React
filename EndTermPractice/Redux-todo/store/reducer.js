const INITIAL_VALUE = {
  data: [],
};

const reducer = (state = INITIAL_VALUE, action) => {
  if (action.type === "ADD") {
    return { ...state, data: [...state.data, action.payload.input] };
  }
  if (action.type === "DELETE") {
    console.log(action.payload.item);
    return {
      ...state,
      data: state.data.filter((item) => item !== action.payload.item),
    };
  }
  if (action.type === "EDIT") {
    console.log(action.payload);
    return {
      ...state,
      data: state.data.map((item) =>
        item === action.payload.oldInput ? action.payload.newInput : item
      ),
    };
  }

  return state;
};

export default reducer;