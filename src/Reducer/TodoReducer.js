import { toast } from "react-toastify";

const ErrorToast = () => {
  toast.error("This todo has already been added!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const SuccessToast = () => {
  toast.success("This todo added.", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      const newTodo = action.value;
      if (state.todos.includes(newTodo)) {
        if (!state.toastShown) {
          ErrorToast();
          return {
            ...state,
            toastShown: true,
            todo: "",
          };
        }
      } else {
        SuccessToast();
      }
      return {
        ...state,
        todo: "",
        todos: [...state.todos, newTodo],
        toastShown: false,
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
