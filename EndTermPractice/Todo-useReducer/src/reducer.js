export const reducer = (state, action) => {
    if (action.type === "ADD") {
      return [...state, action.payload.input];
    }
    if (action.type === "UPDATE") {
      console.log(action.payload);
      return state.map((item) => (
        item === action.payload.oldInput ? action.payload.newInput : item
      ));
    }
    if (action.type === "REMOVE") {
      return state.filter((item) => item != action.payload.item);
    }
    return state;
  };