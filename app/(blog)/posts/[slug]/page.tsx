import { H1 } from "@/components/blog-component";
import { Button } from "@/components/ui/button";
import { getPostByName, getPostsMeta } from "@/lib/blogposts";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 360; // ISR: Revalidate content every 360 seconds (6 minutes)

// Fetch all possible static params for dynamic routing
export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata dynamically based on the post's content
export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`);

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

// The main page component for rendering the blog post
export default async function Post({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); // Fetch the post

  if (!post) notFound(); // If the post is not found, return a 404 page

  const { meta, content } = post; // Destructure meta and content from the post

  // Render the tags
  const tags = meta.tags.map((tag, i) => (
    <Button
      key={i} // Key moved to the Button component to avoid duplication
      variant={"ghost"}
      className="inline-flex animate-shine items-center justify-center rounded-xl border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-neutral-400 transition-colors"
    >
      <Link href={`/tags/${tag}`}>{tag}</Link>
    </Button>
  ));

  return (
    <div className="mx-auto max-w-2xl">
      <H1 text={meta.title} />
      <div className="text-accent space-y-7">{content}</div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Tags:</h2>
        <div className="mt-4 flex space-x-2">{tags}</div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
