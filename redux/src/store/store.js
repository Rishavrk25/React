import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter : 0,
  privacyToggle : false
}

// Reducer
const counterReducer = (store=INITIAL_VALUE,action,payload)=>{
  // console.log(action);
  
  if(action.type ==='INCREMENT'){
    return {...store,counter : store.counter + 1};
  }
  else if(action.type === 'DECREMENT'){
    return {...store,counter : store.counter - 1};
  }
  else if(action.type === 'ADD'){
    return {...store,counter : store.counter + Number(action.payload.num)};
  }
  else if(action.type === 'SUBTRACT'){
    return {...store,counter : store.counter - Number(action.payload.num)};
  }
  else if(action.type ==='PRIVACYTOGGLE'){
    return {...store,privacyToggle : !store.privacyToggle};
  }

  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;