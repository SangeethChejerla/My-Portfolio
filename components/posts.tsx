import { getPostsMeta } from "@/lib/blogposts";
import Link from "next/link";
import { Meta } from "../types";

export const revalidate = 360; // ISR revalidation time in seconds

// Main Posts Page Component
export default async function Posts() {
  const posts = await getPostsMeta(); // Fetch the metadata for all posts

  if (!posts) return <p>No Posts available</p>;

  return (
    <>
      <div className="text-center">
        <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#FFFFFF] bg-[200%_auto] bg-clip-text text-center text-6xl font-extrabold text-transparent">
          My Blog
        </h1>
      </div>
      <div className="mx-auto mt-6 max-w-2xl">
        <SortedPosts posts={posts} />
      </div>
    </>
  );
}

// SortedPosts Component: Sort posts by date (latest first)
export const SortedPosts = ({ posts }: { posts: Meta[] }) => {
  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date

  return (
    <div>
      {sortedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

// Post Component: Render individual post details
export const Post = ({ post }: { post: Meta }) => {
  const { id, title, date, tags } = post;

  return (
    <div className="flex w-full transform flex-col justify-center rounded-lg p-2 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:shadow-xl">
      <div className="mb-2">
        <Link href={`/posts/${id}`}>
          <div className="group-hover:underline">
            <h2 className="text-2xl font-bold text-white transition-colors hover:text-yellow-300">
              {title}
            </h2>
          </div>
        </Link>
        <div className="mt-2 flex flex-wrap gap-2">
          <p className="text-sm text-gray-600">Tags:</p>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="tag-link flex min-w-[80px] max-w-[150px] animate-shine items-center justify-center rounded-lg border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 py-1 text-xs font-medium text-neutral-400 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 hover:text-yellow-300">
        {new Date(date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};
