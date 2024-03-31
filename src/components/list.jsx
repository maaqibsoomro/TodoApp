"use client";
import React from "react";
import { Trash2Icon } from "lucide-react";

function List({ onDelete, todoList }) {
  return (
    <div className="  min-h-[400px] max-h-[400px]">
      <div className="rounded-lg bg-blue-600">
        {Array.isArray(todoList) &&
          todoList?.map((todoItem, index) => (
            <div className="border-b border-b-white px-2 flex py-2 items-center">
              <p className=" w-11/12 text-white">{todoItem}</p>
              <button className="w-1/12 " onClick={() => onDelete?.(index)}>
                <Trash2Icon color={"#FFFF"} size={18} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default List;
