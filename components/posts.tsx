import React from 'react';
import { getPostsMeta } from "@/lib/blogposts";
import { Meta } from "../types";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) return <p>No Posts available</p>;

  return (
    <>
      <div className="text-center">
        <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#FFFFFF] bg-[200%_auto] text-6xl text-center text-transparent font-extrabold bg-clip-text">My Blog</h1>
      </div>
      <div className="mt-6 mx-auto max-w-2xl">
        <SortedPosts posts={posts} />
      </div>
    </>
  );
}

export const SortedPosts = ({ posts }: { posts: Meta[] }) => {
  // Sort posts by date in descending order (latest first)
  const sortedPosts = posts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      {sortedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export const Post = ({ post }: { post: Meta }) => {
  const { id, title, date } = post;

  return (
    <div className="flex flex-col justify-center hover:bg-gray-900 w-full rounded-lg p-2 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-2">
        <Link href={`/posts/${id}`}>
          <div className="group-hover:underline">
            <h2 className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors">{title}</h2>
          </div>
        </Link>
        <div className="flex justify-start mt-2">
          <p className="text-sm text-gray-600">Tags:</p>
          {post.tags.map((tag, index) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 py-1 font-medium text-neutral-400 transition-colors">
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 hover:text-yellow-300">{new Date(date).toLocaleDateString()}</p>
    </div>
  );
};
