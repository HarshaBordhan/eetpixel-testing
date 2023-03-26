import useSWR from "swr";
import { useRouter } from "next/router";

// const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = res.json();

  if (res.status === !200) {
    throw new Error(data.message);
  }

  return data;
};

export default function PersonId() {
  const { query } = useRouter();

  const { data, error, isLoading, isValidating } = useSWR(
    () => (query.id ? `/api/people/${query.id}` : null),
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Eye Color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {isValidating ? (
            <td colSpan={7} align="center">
              Validating...
            </td>
          ) : (
            <>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.height}</td>
              <td>{data.mass}</td>
              <td>{data.hair_color}</td>
              <td>{data.skin_color}</td>
              <td>{data.eye_color}</td>
              <td>{data.gender}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
}
