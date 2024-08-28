import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center gap-2 bg-white px-3 py-5 sm:px-12">
      <Image src={"/img/Frame1.png"} height={25} width={25} />
      <p className="ml-2 text-2xl font-bold">TODO</p>
    </header>
  );
};

export default Header;
