"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import List from "@/components/list";
import { useState } from "react";
export default function Home() {
  const [todoList, setTodoList] = useState([]);
  function deleteItem(index) {
    console.log({ index });
    const itemToBeDelete = todoList[index];
    console.log({ itemToBeDelete });
    setTodoList(todoList.filter((todoitem) => todoitem !== itemToBeDelete));
  }

  function clearInput(){
    
  }

  function addItemToList(textInput) {
    setTodoList((prevItem) => [...prevItem, textInput]);
    // clearInput()
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className=" mx-auto">
        <div className="w-[400px] flex flex-col gap-y-2">
          <Header />
          <List todoList={todoList} onDelete={deleteItem}/>
          <Footer addItemToList={addItemToList} setTextInput={clearInput} />
        </div>
      </div>
    </main>
  );
}
