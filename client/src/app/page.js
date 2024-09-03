"use client";

import Document from "@/components/document/page";
import Header from "@/components/header";
import Todolist from "@/components/todolist/page";
import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [page, setPage] = useState(1);
  const handlePage = (e) => setPage(e);
  return (
    <main className="custom-height container mx-auto pb-3 pt-5 lg:pt-12">
      <div className="flex h-full justify-center gap-16">
        <div
          className={twMerge(
            clsx(
              "hidden h-full w-[400px] flex-col gap-4 px-1 sm:px-0 lg:flex",
              {
                flex: page === 1,
              },
            ),
          )}
        >
          <Todolist handlePage={handlePage} />
        </div>
        <div
          className={twMerge(
            clsx("hidden lg:flex", {
              "flex flex-col": page === 2,
            }),
          )}
        >
          <Document handlePage={handlePage} />
        </div>
      </div>
    </main>
  );
}
