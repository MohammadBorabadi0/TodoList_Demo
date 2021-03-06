import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { FILTER_TASK, UPDATE_FILTER } from "../../actions";
import reducer from "../reducers/todo_reducer";

const getTasks = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};


// InitialState
const initialState = {
  todos: getTasks(),
  counter: 0,
  filter: "all",
  filtered_todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilter = (e) => {
    let value = e.target.textContent.toLowerCase();
    dispatch({ type: UPDATE_FILTER, payload: value });
  };

  useEffect(() => {
    if (state.todos.length) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }, [state.todos]);

  useEffect(() => {
    dispatch({ type: FILTER_TASK });
  }, [state.todos, state.filter]);

  return (
    <TodoContext.Provider
      value={{ ...state, dispatch, inputRef, updateFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
