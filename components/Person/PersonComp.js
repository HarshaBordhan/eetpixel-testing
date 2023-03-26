import Link from "next/link";

export default function PersonComp({ person }) {
  return (
    <Link href="/person/[id]" as={`/person/${person.id}`}>
      {person.id} {person.name}
    </Link>
  );
}
