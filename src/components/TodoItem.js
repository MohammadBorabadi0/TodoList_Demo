import React, { useEffect, useState } from "react";
import { EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from "../actions";
import { useTodo } from "../Provider/context/todo_context";
import Modal from "./Modal";

const TodoItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newVal, setNewVal] = useState(item.todo);
  const { dispatch, inputRef } = useTodo();

  const editHandler = () => {
    setIsEditing(true);
    inputRef.current.focus();
  };

  if (isEditing) {
    return (
      <Modal
        dispatch={dispatch}
        item={item}
        isEditing={isEditing}
        newVal={newVal}
        setNewVal={setNewVal}
        setIsEditing={setIsEditing}
      />
    );
  }

  return (
    <div
      className={`${
        item.isComplete && "opacity-50 line-through"
      } flex justify-between items-center bg-white shadow-lg rounded-lg mb-3 px-4 py-2 text-lg`}
    >
      <h4
        className="font-semibold"
        onClick={() => dispatch({ type: TOGGLE_TASK, payload: item.id })}
      >
        {item.todo}
      </h4>
      <div className="flex items-center gap-4">
        <button onClick={editHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button
          onClick={() => dispatch({ type: REMOVE_TASK, payload: item.id })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
