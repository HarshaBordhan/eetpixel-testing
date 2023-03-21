export default function User({ user }) {
  return (
    <div className="flex flex-row gap-8">
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
