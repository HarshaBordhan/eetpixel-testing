// SSR with dynamic parameter
/*
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
*/

// getServerSideProps context
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
  const { params, req, res, query } = context;
  console.log(query);

  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Harsha"]);

  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}` // fake api (run in terminal 'npm run serve-json')
  );
  const data = await response.json();

  console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
