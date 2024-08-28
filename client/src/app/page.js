import Document from "@/components/document/page";
import Header from "@/components/header";
import Todolist from "@/components/todolist/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="custom-height mx-auto w-[1125px] pb-3 pt-12">
      <div className="flex h-full gap-16">
        <Todolist />
        <Document />
      </div>
    </main>
  );
}
