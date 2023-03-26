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
