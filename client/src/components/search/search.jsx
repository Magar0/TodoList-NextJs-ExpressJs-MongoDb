import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "@/store/slices/todo";

const Search = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const allTodos = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() === "") {
      setSearch(false);
      dispatch(setTodoList(allTodos));
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (input.trim()) {
        const newArr = allTodos.filter((todo) =>
          todo.title.match(new RegExp(input, "i")),
        );
        dispatch(setTodoList(newArr));
      }
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <i className="flex items-center">
      {search ? (
        <div className="relative">
          {/* overlay */}
          {/* <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-gray-500 opacity-0"
            onClick={() => setSearch(false)}
          ></div> */}
          <Input
            className="z-20 bg-white"
            placeholder="search"
            value={input}
            autoFocus
            onChange={handleChange}
          />
        </div>
      ) : (
        <SearchOutlined className="text-xl" onClick={() => setSearch(true)} />
      )}
    </i>
  );
};

export default Search;
