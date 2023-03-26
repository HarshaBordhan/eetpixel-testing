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
    <div>
      <li>{data.id}</li>
      <li>{data.name}</li>
      <li>{data.height}</li>
      <li>{data.mass}</li>
      <li>{data.hair_color}</li>
      <li>{data.skin_color}</li>
      <li>{data.eye_color}</li>
      <li>{data.gender}</li>
    </div>
  );
}
