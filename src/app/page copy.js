"use client";
import { Search, SquarePenIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  function addItemToList() {
    setTodoList((prevItem) => [...prevItem, textInput]);
    setTextInput("");
  }
  function deleteItem(index) {
    console.log({ index });
    const itemToBeDelete = todoList[index];
    console.log({ itemToBeDelete });
    setTodoList(todoList.filter((todoitem) => todoitem !== itemToBeDelete));
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className=" mx-auto">
        <div className="w-[400px] flex flex-col gap-y-2">
          <div className="flex items-center text-white bg-slate-900 rounded-lg p-2">
            <Search color={"#FFFF"} size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 outline-none border-none w-full "
            />
          </div>
          <div className="  min-h-[400px] max-h-[400px]">
            <div className="rounded-lg bg-blue-600">
              {Array.isArray(todoList) &&
                todoList?.map((todoItem, index) => (
                  <div className="border-b border-b-white px-2 flex py-2 items-center">
                    <p className=" w-11/12 text-white">{todoItem}</p>
                    <button className="w-1/12 ">
                      <Trash2Icon
                        color={"#FFFF"}
                        size={18}
                        onClick={() => deleteItem(index)}
                      />
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex text-white bg-slate-900 rounded-lg px-3 p-2">
            <input
              type="text"
              placeholder="Add Todo Here."
              className="bg-transparent px-1 outline-none border-none w-full "
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button onClick={addItemToList}>
              <SquarePenIcon color={"#FFFFFF"} size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
