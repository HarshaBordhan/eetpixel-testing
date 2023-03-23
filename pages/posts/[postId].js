// SSG
/*
export default function PostId({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

// export async function getStaticProps(context) {
//   const { params } = context;

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// // Or,
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
*/

// fetching paths for getStaticPaths
/*
///////////////////////////////////////////

export default function PostId({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
 */

/*
// fallback: false
//////////////////////////////////////
export default function PostId({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
*/

// fallback: true
///////////////////////////////////////////
import { useRouter } from "next/router";

export default function PostId({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
