import * as users from "../../../services/users";
/**
 * Route /api/:userId/topics POST
 * body should contain a topics array
 * with strings containing the actual topics
 * That we want to select
 */
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      console.log;
      const { topics } = req.body;
      const { userId } = req.query;
      console.log("Topics", JSON.stringify(topics));
      console.log("User ID", userId);
      const user = await users.setTopics({ userId, topics });
      console.log("User", user);
      res.status(200).json(user);
    } catch (ex) {
      res.status(500).send("There was an error setting the user topics.");
    }
  }
};
