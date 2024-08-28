"use client";

import Document from "@/components/document/page";
import Header from "@/components/header";
import Todolist from "@/components/todolist/page";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";

export default function Home() {
  const { width } = useWindowSize();
  const [page, setPage] = useState(1);
  const handlePage = (e) => setPage(e);
  return (
    <main className="custom-height container mx-auto pb-3 pt-12">
      <div className="flex h-full justify-center gap-16">
        {(width >= 1024 || page === 1) && <Todolist handlePage={handlePage} />}
        {(width >= 1024 || page === 2) && <Document handlePage={handlePage} />}
      </div>
    </main>
  );
}
