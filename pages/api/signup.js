import * as users from "../../services/users";

export default (req, res) => {
  if (req.method === "POST") {
    const user = users.create(req.body);
    console.log("user", user);
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "John Doe" }));
};
