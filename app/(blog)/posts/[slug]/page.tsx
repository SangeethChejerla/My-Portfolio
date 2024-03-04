import { getPostsMeta, getPostByName } from "@/lib/blogposts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { H1 } from "@/components/blog-component";

export const revalidate = 0;
// add metadata for the title.
// need to revalidate.

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

type Props = { params: { slug: string } };

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;

  //   published date

  const tags = meta.tags.map((tag, i) => (
    <Link
      className="inline-flex animate-shine items-center justify-center rounded-full 
      text-xs border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%
        ,#000103)] bg-[length:200%_100%] px-3 py-1 font-medium text-neutral-400
         transition-colors space-x-4 hover:bg-yellow-300 hover:text-black"
      key={i}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));

  return (
    <>
      <H1 text={meta.title} />
      <div className="text-accent space-y-7">{content}</div>
      <div>Related: {tags}</div>
      <Link href="/">Back to home</Link>
    </>
  );
}