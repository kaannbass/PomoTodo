function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.value],
      };
    case "SET_DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.value),
      };
    default:
      return state;
  }
}

export default reducer;
