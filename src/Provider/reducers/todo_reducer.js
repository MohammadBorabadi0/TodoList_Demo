import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import {
  ADD_TASK,
  EDIT_TASK,
  FILTER_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  UPDATE_FILTER,
} from "../../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const udpatedTodos = [...state.todos];
      const count = state.counter + 1;

      udpatedTodos.push({
        id: state.counter,
        todo: action.payload,
        isComplete: false,
      });

      return {
        ...state,
        todos: udpatedTodos,
        counter: count,
        filtered_todos: udpatedTodos,
      };
    }

    case REMOVE_TASK: {
      const udpatedTodos = [...state.todos];
      const filteredTodos = udpatedTodos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filteredTodos, counter: state.counter };
    }

    case EDIT_TASK: {
      const udpatedTodos = [...state.todos];
      const index = udpatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = udpatedTodos[index];
      updatedItem.todo = action.payload;

      return { ...state, todos: udpatedTodos, counter: state.counter };
    }

    case UPDATE_FILTER: {
      return { ...state, filter: action.payload };
    }

    case FILTER_TASK: {
      const { filter, todos } = state;
      let tempTodos = [...todos];

      if (filter === "all") {
        tempTodos = [...todos];
      }

      if (filter === "completed") {
        tempTodos = tempTodos.filter((i) => i.isComplete);
      }

      if (filter === "uncompleted") {
        tempTodos = tempTodos.filter((i) => !i.isComplete);
      }

      return { ...state, filtered_todos: tempTodos };
    }

    case TOGGLE_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.payload);
      const updatedItem = updatedTodos[index];
      updatedItem.isComplete = !updatedItem.isComplete;
      return {
        ...state,
        counter: state.counter,
        todos: updatedTodos,
        filtered_todos: updatedTodos,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
