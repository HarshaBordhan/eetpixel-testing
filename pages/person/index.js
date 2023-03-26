/*
import { useEffect, useState } from "react";

export default function Person() {
  const [isLoading, setIsLoading] = useState(true);
  const [personData, setPersonData] = useState([]);
  // const { data, error } = useSWR("person", fetcher);

  useEffect(() => {
    const fetchData = async function () {
      const res = await fetch("/api/people");
      const data = await res.json();
      setPersonData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {personData.map((person) => (
        <div className="text-white" key={person.id}>
          {person.id} {person.name}
        </div>
      ))}
    </>
  );
}
*/
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

// // Or,
// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

export default function Person() {
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return "There is something wrong!";
  if (!data) return "Loading";

  return (
    <>
      {data.map((person) => (
        <div key={person.id}>
          {person.id} {person.name}
        </div>
      ))}
    </>
  );
}
