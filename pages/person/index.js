// import { useSWR } from "swr";

import { useEffect, useState } from "react";

// const fetcher = () => {};

export default function Person() {
  const [isLoading, setIsLoading] = useState(true);
  const [personData, setPersonData] = useState(null);
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
      <div className="text-white">
        {personData.id} {personData.name}
      </div>
    </>
  );
}
