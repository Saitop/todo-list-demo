const initialState = {
  todos: [],
  isOnlyActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case "REFRESH_TODOS":
      return {
        ...state,
        todos: payload
      };

    case "SET_FILTER":
      return {
        ...state,
        isOnlyActive: payload
      };

    default:
      return state
  }
}
