const initialState = {
  user: [],
  error: null,
  loading: false,
  carts: {}
};

export default function profReducer (state = initialState, action) {
  switch (action.type) {
    case 'user/load/fulfilled':
        return{
            ...state,
            user: [action.payload]
        }
        case 'cart/postCart/fulfilled':
      return {
        ...state,
          carts: action.payload,
      };
      case "cart/loadCart/fulfilled":
        return {
          ...state,
          carts: action.payload
        }
    default:
      return state;
  }
}

export const userLoad = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:7000/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json()
      dispatch({type: "user/load/fulfilled", payload: data})
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const BuyTur = (tur) => {
  return async (dispatch) => {
    try {
    const response = await fetch("http://localhost:7000/cartToken", {
      method: "POST",
      body: JSON.stringify({ tur }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    dispatch({type: 'cart/postCart/fulfilled', payload: json});
    } catch (e) {
      console.log(e);
    }
  };
};

export const cartLoad = () => {
  return async (dispatch) => {
try {
  const response = await fetch("http://localhost:7000/cart", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  })
  const data = await response.json()
  dispatch({type: "cart/loadCart/fulfilled", payload: data})
} catch (error) {
  console.log(error.message);
}
  }
}
