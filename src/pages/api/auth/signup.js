import { save } from "@/services/users";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).send();
  }

  const { firstName, lastName, email, password } = req.body;
  try {
    await save(firstName, lastName, email, password);
    return res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error("Signup failed:", err.message);
    return res.status(400).json({ message: `Signup failed. ${err.message}` });
  }
}