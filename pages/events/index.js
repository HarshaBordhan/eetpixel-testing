// Filting Catergory
import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const res = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await res.json();

    setEvents(data);
    router.push(`/events?category=sports`, undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h2>Event List</h2>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h3>
              {event.id} {event.title} | {event.category}
            </h3>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category;

  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();

  return {
    props: {
      eventList: data,
    },
  };
}
