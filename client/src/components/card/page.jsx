"use client";

import { setCurrentTodoSelected } from "@/store/slices/todo";
import React from "react";
import { useDispatch } from "react-redux";

const TodoCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(setCurrentTodoSelected(data));
  };

  const date = new Date(data?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      onClick={handleCardClick}
      className="flex h-[100px] w-full flex-shrink-0 cursor-pointer flex-col gap-2 overflow-hidden rounded-lg border border-white bg-white px-4 py-2 hover:border-black active:border"
    >
      <h3 className="text-lg font-semibold">
        {data?.title ? data.title : "New Addition"}
      </h3>
      <div className="flex h-full justify-between gap-4 overflow-auto">
        <p className="flex-grow overflow-hidden text-sm text-slate-700">
          {data?.description?.length > 70
            ? data?.description.slice(0, 70) + "..."
            : data?.description}
        </p>
        <p className="mb-1 mt-auto w-24 text-nowrap text-xs text-slate-600">
          {date && date}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
