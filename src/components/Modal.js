import React, { useRef, useEffect } from "react";
import { EDIT_TASK } from "../actions";

const Modal = ({
  isEditing,
  setIsEditing,
  newVal,
  setNewVal,
  dispatch,
  item,
}) => {
  const inputRef = useRef();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newVal.trim()) {
      dispatch({ type: EDIT_TASK, payload: newVal, id: item.id });
    } else {
      setNewVal(item.todo);
    }

    setIsEditing(false);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-700 flex items-center justify-center"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="w-[90vw] md:w-[50vw] h-[50vh] flex justify-center items-center bg-white relative">
        <form className="text-lg" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
            type="text"
            className="text-sm md:text-xl border border-gray-400 shadow-lg mr-2 px-2 md:px-4 py-1 md:w-[30vw] rounded-sm font-semibold focus:outline-blue-700 focus:border-blue-700"
          />
          <button className="text-sm md:text-xl border border-gray-600 shadow-lg bg-gray-200 px-2 md:px-4 py-1 rounded-sm font-semibold focus:outline-none focus:border-blue-700">
            Edit
          </button>
        </form>
        <button
          className="absolute top-2 right-2"
          onClick={() => setIsEditing(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
