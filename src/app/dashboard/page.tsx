"use client";
import { useEffect, useState, Key } from "react";
import { Models } from "appwrite";
import { getAccount } from "@/functions";

const Dashboard = () => {
  const posts = [
    {
      $id: "1",
      title: "Post 1",
      content: "This is the content of post 1",
      from: "User 1",
      $createdAt: 1631760000000,
    },
    {
      $id: "2",
      title: "Post 2",
      content: "This is the content of post 2",
      from: "User 2",
      $createdAt: 1631846400000,
    },
    {
      $id: "3",
      title: "Post 3",
      content: "This is the content of post 3",
      from: "User 3",
      $createdAt: 1631932800000,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    async function fetchUser() {
      const userData = await getAccount();
      setUser(userData);
      if (!userData) window.location.href = "/login";
    }

    fetchUser();
  }, []);

  return (
    <div className="flex min-h-screen relative">
      {/* Main Content Area */}
      <div
        className={`dashboardContainer ${isMenuOpen ? "border-l" : "lg:ml-0"}`}
      >
        <header className="mb-8 pb-4">
          <h1 className="text-3xl font-semibold">Welcome {"User"}!</h1>
          <p className="text-lg">Here is the list of posts for the day</p>
        </header>
        <section className="sectionContainer">
          <main className="flex-1">
            <ul className="space-y-4">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <li key={index} className="clickableListItem">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-300 mb-2">{post.content}</p>
                    <p className="text-gray-500 text-sm">
                      By {post.from} on{" "}
                      {new Date(post.$createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))
              ) : (
                <p className="text-center">No posts available.</p>
              )}
            </ul>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
