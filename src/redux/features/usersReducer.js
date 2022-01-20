const initialStateTur = {
  users: [],
  loading: false,
  error: null
}

export default function usersReducer(state = initialStateTur, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const responce = await fetch("http://localhost:7000/users")
      const users = await responce.json()
      console.log(users)
      // dispatch({type: "turs/Loading/fulfilled", payload: users})
    } catch (e) {
      console.log(e)
    }
  }
}

