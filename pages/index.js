import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href='news-search'>
        <h3>News Search</h3>
      </Link>
    </>
  );
};

export default Home;
