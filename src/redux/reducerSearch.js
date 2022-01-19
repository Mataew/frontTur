const initialStateTur = {
    turs: [],
    loading: false,
    error: null
}

export default function application(state = initialStateTur, action) {
    switch(action.type) {
        case "tursLoading/pending":
            return {
                ...state,
                loading: true,
            }
            case "tursLoading/fulfilled":
                return {
                    ...state,
                    turs: action.payload,
                    loading: false
                }
                case "tursLoading/rejected":
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
        dispatch({type: "tursLoading/pending"})
        try {
        const responce = await fetch("http://localhost:7000/turs")
        const turs = await responce.json()

        dispatch({type: "tursLoading/fulfilled", payload: turs})
        } catch (e) {
            dispatch({type: "tursLoading/rejected", payload: e})
        }
    }
}