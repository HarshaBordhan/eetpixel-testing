/*
import { people } from "../../../data/persons";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const person = people.find(
      (person) => parseInt(person.id) === parseInt(id)
    );

    // res.status(200).json(person);

    person
      ? res.status(200).json(person)
      : res
          .status(404)
          .json({ message: `Something went wrong!! User id ${id} not found` });
  }
}
*/

// Or,

// Stackblitz
import { people } from "../../../data/persons";

export default function handler(req, res) {
  const { query } = req;
  const { id } = query;

  const person = people.find((person) => person.id === id);

  // res.status(200).json(person);

  // User id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
