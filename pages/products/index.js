export default function ProductList() {
  return <></>;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
