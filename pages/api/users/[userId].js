import * as users from "../../../services/users";

export default async (req, res) => {
  if (req.method === "GET") {
    const { userId } = req.query;

    try {
      const user = await users.findById(userId);
      return user ? res.status(200).json(user) : res.status(404);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
