const initialStateTur = {
  turs: [],
  loading: false,
  error: null
}

export default function turReducer(state = initialStateTur, action) {
  switch(action.type) {
    case "turs/Loading/pending":
      return {
        ...state,
        loading: true,
      }
    case "turs/Loading/fulfilled":
      return {
        ...state,
        turs: action.payload,
        loading: false
      }
    case "turs/Loading/rejected":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export const GetTurs = () => {
  return async (dispatch) => {
    dispatch({type: "turs/Loading/pending"})
    try {
      const responce = await fetch("http://localhost:7000/turs")
      const turs = await responce.json()

      dispatch({type: "turs/Loading/fulfilled", payload: turs})
    } catch (e) {
      dispatch({type: "turs/Loading/rejected", payload: e})
    }
  }
}