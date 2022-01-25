const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id'),
  check: false
};

export default function authorizatonReducer(state = initialState, action) {
  switch (action.type) {
    case "authorizatonReducer/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "application/signup/fulfulled":
      return {
        ...state,
        signingUp: false,
        error: null,
        check: true
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
        check: false
      };
    case "authorizatonReducer/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case "application/signin/fulfulled":
      return {
        ...state,
        signingIn: false,
        id: action.payload.json.id,
        token: action.payload.json.token,
      };
    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
      case 'application/logOut/fulfilled':
        return {
          ...state,
          token: null
        }
    default:
      return state;
  }
}

export const createUser = (login, password, firstName, lastName) => {
  return async (dispatch) => {
    dispatch({ type: "authorizatonReducer/signup/pending" });

    const response = await fetch("http://localhost:7000/users", {
      method: "POST",
      body: JSON.stringify({ login, password, firstName, lastName }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (json.status === 401) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signup/fulfulled", payload: json });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "authorizatonReducer/signin/pending" });

    const response = await fetch("http://localhost:7000/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
console.log(json);
    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error});
    } else {
      dispatch({ type: "application/signin/fulfulled", payload: {json},})
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id)
    }
  };
};

export const logOut = () => { 
  return async (dispatch) => { 
    dispatch({ type: "application/logOut/fulfilled" }); 
    localStorage.clear(); 
  }; 
};