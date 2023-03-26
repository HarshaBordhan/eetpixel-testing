import { people } from "../../../data/persons";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const person = people.find(
      (person) => parseInt(person.id) === parseInt(id)
    );
    res.status(200).json(person);
  }
}
