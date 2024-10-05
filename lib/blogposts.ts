import {
  BlueLink,
  BulletList,
  Code,
  CodeBlock,
  CustomImage,
  Example,
  H1,
  H2,
  InfoBlock,
} from "@/components/blog-component";
import { Tab } from "@/components/tabs";
import { Tabs } from "@/components/ui/tabs";
import Video from "@/components/video";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { BlogPost, Meta } from "../types";

export const getPostsMeta = cache(getPosts);

export async function getPosts(): Promise<Meta[] | undefined> {
  try {
    // Fetch file tree from GitHub repo
    const blogPosts = await fetch(
      "https://api.github.com/repos/sangeeth-Chejerla/Blogposts/git/trees/master?recursive=1",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    // Log response status and message for debugging
    if (!blogPosts.ok) {
      return undefined;
    }

    const repoFileTree: FileTree = await blogPosts.json();

    // Filter MDX files from the file tree
    const filesArray = repoFileTree.tree
      .map((obj) => obj.path)
      .filter((path) => path.endsWith("mdx"));

    const posts: Meta[] = [];

    // Loop through files and fetch metadata for each MDX file
    for (const file of filesArray) {
      const post = await getPostByName(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }

    return posts;
  } catch (error) {
    return undefined;
  }
}

export async function getPostByName(
  fileName: string,
): Promise<BlogPost | undefined> {
  try {
    // Fetch the raw MDX content from GitHub
    const post = await fetch(
      `https://raw.githubusercontent.com/sangeeth-Chejerla/Blogposts/master/${fileName}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    if (!post.ok) {
      return undefined;
    }

    const rawMDX = await post.text();
    if (rawMDX === "404: Not Found") {
      return undefined;
    }

    // Compile the MDX content and extract frontmatter
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
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      },
    });

    const id = fileName.replace(/\.mdx$/, ""); // Create the post ID
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
  } catch (error) {
    return undefined;
  }
}

type FileTree = {
  tree: { path: string }[];
};
