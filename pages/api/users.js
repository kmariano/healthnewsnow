import * as users from "../../services/users";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = await users.create(req.body);
      return user ? res.status(201).json(user) : res.status(500);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
