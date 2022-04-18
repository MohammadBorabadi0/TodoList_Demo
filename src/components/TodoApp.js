import React from "react";
import { useTodo } from "../Provider/context/todo_context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const { updateFilter, filter } = useTodo();

  return (
    <div className="flex flex-col gap-4 w-[90%] md:w-[70%] lg:w-[40%]">
      <>
        <header className="flex justify-center items-center text:xl lg:text-2xl font-bold text-gray-900">
          <h2>What's your plan for today ?</h2>
        </header>
        <div className="flex justify-center gap-1 md:gap-3 items-center mb-4">
          <button
            onClick={updateFilter}
            className={`${
              filter === "all" ? "bg-blue-700" : "bg-blue-300"
            } inline-block  font-semibold text-white  px-2 md:px-4 py-1 rounded-md text-sm lg:text-lg`}
          >
            All
          </button>
          <button
            onClick={updateFilter}
            className={` ${
              filter === "completed" ? "bg-blue-700" : "bg-blue-300"
            } inline-block  font-semibold text-white px-2 md:px-4 py-1 rounded-md text-sm lg:text-lg`}
          >
            Completed
          </button>
          <button
            onClick={updateFilter}
            className={`${
              filter === "uncompleted" ? "bg-blue-700" : "bg-blue-300"
            } inline-block  font-semibold text-white px-2 md:px-4 py-1 rounded-md text-sm lg:text-lg`}
          >
            UnCompleted
          </button>
        </div>
        <TodoForm />
        <TodoList />
      </>
    </div>
  );
};

export default TodoApp;
