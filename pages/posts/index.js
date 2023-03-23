// SSG
/*
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h1>
              {post.id} {post.title}
            </h1>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
*/

// fallback and fetching Paths
////////////////////////////////////////
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h1>
              {post.id} {post.title}
            </h1>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
      // posts: data.slice(0, 3), // just test
    },
  };
}
