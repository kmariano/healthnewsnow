import Link from "next/link";

import TopBar from '../components/top-bar';
import "../styles/index.css";

const Home = () => {
  return (
    <>
      <TopBar />

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
