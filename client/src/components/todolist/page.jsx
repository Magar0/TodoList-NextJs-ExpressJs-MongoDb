"use client";

import TodoCard from "../card/page";
import TodoBtn from "../ui/todoBtn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTodoSelected, setTodoList } from "@/store/slices/todo";
import Search from "../search/search";
import { setAllTodos } from "@/store/slices/allTodos";

const Todolist = ({ handlePage }) => {
  const [loading, setLoading] = useState(false);
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}todo`);
    const data = await result.json();
    const reversed = data.reverse();
    dispatch(setAllTodos(reversed));
    dispatch(setTodoList(reversed));
    dispatch(setCurrentTodoSelected(data[0]));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex items-center justify-between">
        <TodoBtn />
        <Search />
      </div>

      <div className="card-list flex h-full flex-col gap-[15px] overflow-auto pe-2 sm:w-[400px]">
        {loading && (
          <div className="flex w-full justify-center">
            <div className="loader mt-5"></div>
          </div>
        )}
        {todoList &&
          todoList.length > 0 &&
          todoList.map((data, ind) => (
            <TodoCard data={data} key={ind} handlePage={handlePage} />
          ))}
      </div>
    </>
  );
};

export default Todolist;
