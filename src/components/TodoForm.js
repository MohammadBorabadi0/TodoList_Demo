import React, { useEffect, useState } from "react";
import { ADD_TASK } from "../actions";
import { useTodo } from "../Provider/context/todo_context";

const TodoForm = () => {
  const [inputVal, setInputVal] = useState("");
  const { inputRef, dispatch } = useTodo();

  const handeSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) {
      alert("Task must is not empty !!");
      return;
    }

    dispatch({ type: ADD_TASK, payload: inputVal });
    setInputVal("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handeSubmit} className="flex w-full">
      <input
        ref={inputRef}
        placeholder="New Task"
        type="text"
        className="px-2 lg:px-4 py-2 text:md lg:text-lg mr-1.5 rounded-lg shadow-lg flex flex-1 font-semibold"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="px-2 lg:px-6 py-2 bg-white text-sm lg:text-lg shadow-lg rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
