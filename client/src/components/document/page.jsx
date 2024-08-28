"use client";

import { DeleteOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import TextCustomize from "../ui/textCustomize";
import TextArea from "antd/es/input/TextArea";
import Input from "antd/es/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodoList, updateTitleDesc } from "@/store/slices/todo";
import axios from "axios";

const Document = () => {
  const [input, setInput] = useState();
  const [description, setDescription] = useState();
  const { todoList, currentTodoSelected } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}todo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: currentTodoSelected._id }),
    });
    if (response.ok) {
      dispatch(deleteTodo(currentTodoSelected._id));
    }
  };

  const handleUpdate = async () => {
    const newdata = {
      _id: currentTodoSelected._id,
      title: input,
      description,
      createdAt: currentTodoSelected.createdAt,
    };
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}todo`,
        newdata,
      );

      if (res?.statusText !== "OK") {
        return alert("Error editing");
      }
      const index = todoList.findIndex(
        (ele) => ele._id === currentTodoSelected._id,
      );
      dispatch(updateTitleDesc({ index, data: newdata }));
    } catch (err) {
      alert("Error editing");
    }
  };

  useEffect(() => {
    if (
      input !== currentTodoSelected?.title ||
      description !== currentTodoSelected?.description
    ) {
      handleUpdate();
    }
  }, [input, description]);

  useEffect(() => {
    if (currentTodoSelected) {
      setInput(currentTodoSelected?.title);
      setDescription(currentTodoSelected?.description);
    }
  }, [currentTodoSelected]);

  return (
    <div className="flex h-full flex-grow flex-col items-start gap-5 rounded-md border-[1px] border-[#e5e3e3] bg-white px-10 py-8">
      <div className="flex w-full justify-between">
        <Input
          className="w-fit border-none text-4xl font-semibold text-[#1B1B1B]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Addition"
        />
        <DeleteOutlined
          className="cursor-pointer text-xl hover:text-red-700"
          onClick={handleDelete}
        />
      </div>
      <TextCustomize />
      <div className="h-[1px] w-full bg-black"></div>
      <textarea
        // autoSize={true}
        onChange={(e) => setDescription(e.target.value)}
        // style={{ height: "100%", resize: "none" }}
        placeholder="Type your description here"
        className="h-full w-full resize-none border-none text-base font-light focus-visible:outline-none"
        value={description}
      />
    </div>
  );
};

export default Document;
