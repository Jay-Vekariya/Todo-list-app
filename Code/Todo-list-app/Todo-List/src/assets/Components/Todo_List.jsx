import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo_List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef();

  return (
    <div className="bg-slate-800 h-screen pt-24 text-center text-white overflow-scroll">
      <div className="sm:text-[50px] lg:text-[50px] text-white font-serif sm:text-wrap lg:whitespace-nowrap p-4 text-[30px]">
        Todo List App
      </div>
      <div className="flex place-content-center gap-6 flex-col p-4 xl:flex  lg:flex  md:flex md:flex-row sm:flex sm:flex-row">
        <input
          type="text"
          title="Enter todo"
          ref={inputRef}
          placeholder="Enter Todos.."
          className="border-2 placeholder:text-center placeholder:text-[20px] border-purple-800 hover:border-blue-500 border-outline-none duration-300 rounded-lg lg:w-[350px] lg:h-12 md:h-12 md:w-[350px] sm:h-12 h-10 sm:w-[350px] bg-slate-800"
        />
        <button
        title="Add todo"
          onClick={() => {
            const todoText = inputRef.current.value;
            if(todoText === "") {
              alert("Please enter a task");
            }
            if (todoText.trim()) {
              dispatch({
                type: "ADD_TODO",
                payload: { id: Date.now(), Texts: todoText, completed: false },
              });
              inputRef.current.value = "";
            }
          }}
          className="text-white text-[20px] border-0 bg-blue-600 lg:p-1.5 md:p-1.5 sm:p-1.5 p-1.5 lg:w-[120px] rounded-md"
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col place-content-center  p-4 text-[20px]">
        <div className="lg:flex lg:place-content-center md:flex  md:place-content-center sm:flex sm:place-content-center flex  place-content-center lg:gap-8 gap-8 ">
          <div className="flex lg:gap-4 gap-4">
            <div className="text-white lg:p-4 p-4">
              <ul>
                {todos.map((items) => (
                  <div
                    key={items.id}
                    className="md:flex sm:flex items-center sm:gap-x-4"
                  >
                    <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:place-content-center sm:flex-row flex place-content-center">
                      <div className="lg:flex md:flex sm:flex flex gap-x-4">
                        {/*Mark as complete*/}
                        <input
                          type="checkbox"
                          className="w-5"
                          title="Mark as complete"
                          onChange={() =>
                            dispatch({
                              type: "TOGGLE_TODO",
                              payload: items.id,
                            })
                          }
                        />
                        {/* Displaying the list of all to-do items */}
                        <li
                          className={`${
                            items.completed ? "line-through" : ""
                          } lg:p-4 lg:w-60 w-[110px] md:p-4 md:w-60 lg:overflow-hidden lg:text-wrap`}
                        >
                          {items.Texts}
                        </li>
                      </div>
                    </div>
                    <div className="flex place-content-center gap-6 p-4 lg:items-center md:items-center">
                      {/* Delete Button */}
                      <button
                      title="Delete todo"
                        onClick={() =>
                          dispatch({
                            type: "DELETE_TODO",
                            payload: items.id,
                          })
                        }
                        className="bg-red-700 text-white hover:bg-green-70 p-1.5 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo_List;
