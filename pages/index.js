import "../styles/index.css";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="signup">
        <h3>Sign Up</h3>
      </Link>
      <Link href="signup/topics">
        <h3>Sign Up Topics</h3>
      </Link>
      <Link href="signup/success">
        <h3>Sign Up Success</h3>
      </Link>
      <Link href="news-search">
        <h3>News Search</h3>
      </Link>
    </>
  );
};

export default Home;
