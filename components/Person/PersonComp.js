import Link from "next/link";

export default function PersonComp({ person }) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`} passHref>
        {person.id} {person.name}
      </Link>
    </li>
  );
}
