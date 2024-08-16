"use client";
import { useEffect, useState } from "react";
import PopularPosts from "@/components/popularPosts";
import {
  FaHome,
  FaCompass,
  FaEnvelope,
  FaSearch,
  FaUser,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ReactNode } from "react";
import { Models } from "appwrite";
import { account } from "../app/appwrite";
const { logout } = require("../functions/index");
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Menu = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<Models.User<Models.Preferences>>();

  async function checkAuth() {
    try {
      const user = await account.get();
      setUser(user);
      // console.log(user);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function Logout() {
    try {
      toast.success("Logged out successfully!"); // Show success toast
      setTimeout(async () => {
        await logout();
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.error("Failed to delete post:", error);
      toast.error("Failed to delete post. Please try again."); // Show error toast
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="flex min-h-screen relative">
      <ToastContainer className="-mt-3 -mr-2" autoClose={1000} />
      {/* Hamburger Icon */}
      <div className="lg:hidden fixed top-4 left-4">
        <button
          className="text-gray-800 p-0 rounded-md transition duration-100 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-gray-200" />
          ) : (
            <FaBars className="text-2xl text-gray-200" />
          )}
        </button>
      </div>

      {/* Left Menu Bar */}
      <aside
        className={`lg:w-64 p-6 border-gray-200 shadow-md top-0 left-0 h-full lg:h-auto transition-transform duration-150 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 md:relative md:h-auto sm:h-auto" // Show the menu
            : "-translate-x-full border-r h-auto hidden md:h-auto lg:block xl:w-80 right-0" // Hide the menu
        } lg:translate-x-0 `}
      >
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <ul>
          <li className="mb-8">
            <a
              href="/dashboard"
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaHome className="mr-4 text-2xl" /> Trending
            </a>
          </li>
          <li className="mb-8">
            <a
              href="/explore"
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaCompass className="mr-4 text-2xl" /> Explore
            </a>
          </li>
          <li className="mb-8">
            <a
              href="/messages"
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaEnvelope className="mr-4 text-2xl" /> Messages
            </a>
          </li>
          <li className="mb-8">
            <a
              href="/search"
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaSearch className="mr-4 text-2xl" /> Search
            </a>
          </li>
          <li className="mb-8">
            <a
              href={`/profile/${user?.$id}`}
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaUser className="mr-4 text-2xl" /> Profile
            </a>
          </li>
          <li className="mb-8">
            <a
              href="/post/create"
              className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
            >
              <FaPlus className="mr-4 text-2xl" /> Create Post
            </a>
          </li>
          {user ? (
            <li className="mb-8">
              <Link
                onClick={Logout}
                href="/"
                className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
              >
                <FaPlus className="mr-4 text-2xl" /> Logout
              </Link>
              <a
                href="/404"
                // onClick={() => Logout()}
                className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
              ></a>
            </li>
          ) : (
            <li className="mb-8">
              <a
                href="/login"
                className="flex items-center text-gray-300 hover:text-blue-600 transition duration-150 ease-in-out text-lg"
              >
                <FaPlus className="mr-4 text-2xl" /> Login
              </a>
            </li>
          )}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex-1 p-8 flex flex-col gap-8 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "border-l" : "lg:ml-0"
        }`}
      >
        <div>{children}</div>
      </div>

      {/* Popular Posts - Positioned on the Right Side */}
      <aside className="hidden md:h-auto xl:block xl:w-80 right-0 h-auto border-l border-gray-200 shadow-md">
        <div className="p-6">
          <PopularPosts />
        </div>
      </aside>
    </div>
  );
};

export default Menu;
