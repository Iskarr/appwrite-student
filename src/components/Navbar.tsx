"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="mr-4 mx-auto py-3 flex justify-between items-center">
        <Link className="text-2xl font-bold ml-auto" href="/">
          MyApp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
