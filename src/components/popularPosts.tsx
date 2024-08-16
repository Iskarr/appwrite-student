import Link from "next/link";

const popularPostsData = [
  {
    id: 1,
    title: "Post Title 1",
    description: "This is the description of post 1.",
    link: "/post/1",
  },
  {
    id: 2,
    title: "Post Title 2",
    description: "This is the description of post 2.",
    link: "/post/2",
  },
  {
    id: 3,
    title: "Post Title 3",
    description: "This is the description of post 3.",
    link: "/post/3",
  },
  {
    id: 4,
    title: "Post Title 4",
    description: "This is the description of post 4.",
    link: "/post/4",
  },
  // Add more posts as needed
];

const PopularPosts = () => {
  return (
    <div className="w-80 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Popular Posts</h2>
      <ul className="space-y-4">
        {popularPostsData.map((post) => (
          <li key={post.id} className="group">
            <Link href={post.link} passHref>
              <div className="mr-8 block transition duration-150 ease-in-out hover:bg-gray-500 rounded-lg p-4 cursor-pointer">
                <h3 className="text-md font-semibold text-gray-200 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;
