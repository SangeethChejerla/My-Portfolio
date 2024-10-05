import { H1 } from "@/components/blog-component";
import { Post } from "@/components/posts";
import { Button } from "@/components/ui/button";
import { getPostsMeta } from "@/lib/blogposts";
import { Metadata } from "next";
import Link from "next/link";

// Dynamic metadata generation based on the tag
export async function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}): Promise<Metadata> {
  return {
    title: `Posts tagged with #${tag}`,
    description: `Read posts related to ${tag}`,
  };
}

// Fetch posts and revalidate after deployment
export default async function TagsPage({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="text-3xl">Sorry, no posts are available.</p>;
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="text-2xl">Sorry, no posts for #{tag} right now...</p>
        <Button variant="link">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 max-w-2xl">
      <H1 text={`Results for: #${tag}`} />
      <ul className="w-full list-none space-y-3">
        {tagPosts.map((post) => (
          <li key={post.id} className="flex">
            <Post key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
