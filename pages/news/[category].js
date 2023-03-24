function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h2>
        Showing list of category <i>{category}</i>
      </h2>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} {article.title}
            </h3>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
