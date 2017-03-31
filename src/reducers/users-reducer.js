
const INITIAL_STATE = {
  all: [],
  user: null
}

const userReducers = (state = INITIAL_STATE, action) => {
  //console.log('userReducers', action);
  switch(action.type) {
    case 'GET_ALL_USERS':
      return { ...state, all: action.payload.data }
    case 'GET_USER':
      return { ...state, user: action.payload.data }
    default:
      return state;
  }
}

export default userReducers;
