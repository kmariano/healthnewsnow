import * as users from "../../services/users";

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    const user = users.create(req.body);
    console.log("user", user);
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ name: "John Doe" }));
};
