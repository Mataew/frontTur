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

export const deleteTour = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:7000/turs/${id}`, { method: "DELETE"})
    } catch (e) {
      console.log(e)
    }
  }
}

export const updateTours = (id, inputFrom, inputTo, inputPrice) => {
  return async (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: inputFrom,
        to: inputTo,
        price: inputPrice
      })
    }
    try {
      await fetch(`http://localhost:7000/turs/${id}`, options)
      dispatch({ type: 'tours/patch/fulfilled', payload: { id, inputFrom, inputTo, inputPrice } })
    } catch (e) {
      console.log(e)
    }
  }
}

export const postTour = (from, to, data, night, amount, hotel, price) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: from,
        to: to,
        data: data,
        night: night,
        amount: amount,
        hotel: hotel,
        price: price
      })
    }
    try {
      await fetch(`http://localhost:7000/turs`, options)
      console.log(from, to, data, night, amount, hotel, price)
    } catch (e) {
      console.log(e)
    }
  }
}

