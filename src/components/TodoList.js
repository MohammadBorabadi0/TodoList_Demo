import React from "react";
import { useTodo } from "../Provider/context/todo_context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filtered_todos } = useTodo();

  return (
    <div className="flex flex-col w-full">
      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
