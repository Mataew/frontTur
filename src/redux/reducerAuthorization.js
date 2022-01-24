const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: null,
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
      };
    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
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
        token: action.payload.token,
      };
    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
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

    if (json === 'Неверный логин или пароль') {
      dispatch({ type: "application/signin/rejected", error: json});
      console.log(json);
    } else {
      dispatch({ type: "application/signin/fulfulled", payload: json, error: json.error });
    }
  };
};
