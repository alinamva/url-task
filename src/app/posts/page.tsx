import Link from "next/link";
import { data1 } from "../data";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-between w-full gap-8">
      {data1.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.slug}
        >
          <div className="flex flex-col items-center justify-center gap-3 p-4 duration-300 border border-white cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-gray-700 w-96 rounded-2xl">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
