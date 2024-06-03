"use client";
import { data1 } from "@/app/data";
import Head from "next/head";
// import { useRouter } from "next/router";

const Post = ({ params }: { params: { slug: string } }) => {
  // const router = useRouter();
  // const { slug } = router.query;
  const post = data1.find((post) => post.slug === params.slug);
  // console.log(params, post);
  if (!post) {
    return "No post found";
  }
  return (
    <div className="container px-4 py-8 mx-auto">
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <p className="mb-4 text-gray-600">{post.excerpt}</p>
        <div className="prose prose-lg">{post.content}</div>
      </article>
    </div>
  );
};

export default Post;
