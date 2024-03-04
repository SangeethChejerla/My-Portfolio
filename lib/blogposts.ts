import { BlogPost, Meta } from "../types";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "@/components/video";
import { cache } from "react";
import { Tabs } from "@/components/ui/tabs";
import  {Tab}  from "@/components/tabs";
import {
  H1,
  H2,
  CustomImage,
  BlueLink,
  BulletList,
  Code,
  CodeBlock,
  Example,
  InfoBlock,
} from "@/components/blog-component";


export const getPostsMeta = cache(getPosts);


export async function getPosts(): Promise<Meta[] | undefined> {
  const blogPosts = await fetch(
    "https://api.github.com/repos/sangeeth-Chejerla/Blogposts/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      // cache: "no-store", // only use on dev server
    }
  );
  

  if (!blogPosts.ok) return undefined;

  const repoFileTree: FileTree = await blogPosts.json();

  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith("mdx"));
 

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }
  return posts;
}

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const post = await fetch(
    `https://raw.githubusercontent.com/sangeeth-Chejerla/Blogposts/master/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!post.ok) return undefined;

  const rawMDX = await post.text();
  if (rawMDX === "404: Not Found") return undefined;


  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
    description: string;
  }>({
    source: rawMDX,
    components: {
      H1,
      H2,
      Video,
      CustomImage,
      BlueLink,
      BulletList,
      Code,
      CodeBlock,
      Example,
      InfoBlock,

      Tabs,
      Tab,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          //@ts-expect-error
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");
  const blogPostObj: BlogPost = {
    meta: {
      id,
      description: frontmatter.description,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
}

type FileTree = {
  tree: [{ path: string }];
};