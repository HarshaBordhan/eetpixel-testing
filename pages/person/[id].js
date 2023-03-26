import useSWR from "swr";
import { useRouter } from "next/router";

// const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = res.json();

  return data;
};

export default function PersonId() {
  const { query } = useRouter();

  const { data, error } = useSWR(
    () => (query.id ? `/api/people/${query.id}` : null),
    fetcher
  );

  if (error) return "There is an error!";
  if (!data) return "Loading...";

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
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  );
}
