import { people } from "../../../data/persons";

export default function handler(req, res) {
  // if (req.method === "GET") res.status(200).json(people);
  // Or,
  res.status(200).json(people);
}
