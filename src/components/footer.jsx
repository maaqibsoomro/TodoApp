"use client";
import { useState } from "react";
import React from "react";
import { SquarePenIcon } from "lucide-react";

function Footer({ addItemToList }) {
  const [textInput, setTextInput] = useState("");

  function handleTextInput(input) {
    console.log({ input });
    setTextInput(input);
  }

  function AddItem() {
    if (textInput.trim()) {
      addItemToList && addItemToList(textInput.trim());
      setTextInput("");
    }
  }

  return (
    <div className="flex text-white bg-slate-900 rounded-lg px-3 p-2">
      <input
        type="text"
        placeholder="Add Todo Here."
        className="bg-transparent px-1 outline-none border-none w-full "
        value={textInput}
        onChange={(e) => handleTextInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            AddItem();
          }
        }}
      />
      <button onClick={AddItem}>
        <SquarePenIcon color={"#FFFFFF"} size={20} />
      </button>
    </div>
  );
}

export default Footer;
