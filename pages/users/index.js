import User from "../../components/Users/User";

export default function UserList({ users }) {
  return (
    <>
      <div>List of Users</div>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // console.log(users);

  return {
    props: {
      users,
    },
  };
}
