const initialState = {
  user: [],
  error: null,
  loading: false,
};

export default function profReducer (state = initialState, action) {
  switch (action.type) {
    case 'user/load/fulfilled':
        return{
            ...state,
            user: [action.payload]
        }  
    default:
      return state;
  }
}

export const userLoad = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:7000/users", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.json()
      dispatch({type: "user/load/fulfilled", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  };
};
