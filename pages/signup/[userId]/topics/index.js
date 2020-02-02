import Card from "../../../../components/card";
import TopBar from "../../../../components/top-bar";
import fetch from "isomorphic-fetch";
import "./index.css";
import { useSWR } from "swr";

const data = [
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  },
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  },
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  },
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  },
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  },
  {
    title: "Something Bad",
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541"
  }
];
/**
 *
 * Get the user from the userId
 * fetch them from the backend
 * Get
 */

async function fetcher(path) {
  const res = await fetch(path);
  const json = await res.json();
  return json;
}
const SignupTopics = ({ userId }) => {
  const { data, error } = useSWR(`/api/users/${userId}`);
  if (error) return <div>Error finding user with {userId}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    <>
      <TopBar altColor />

      <div className="topics__banner">
        <p className="topics__banner-text">TOPIC SELECTION</p>
      </div>

      {/* <div className="topics__container">
        <p className="topics__title">Known Illnesses</p>
        <div className="topics__card-wrap">
          {data.map((item, i) => {
            return <Card key={i} title={item.title} image={item.image} />;
          })}
        </div>

        <p className="topics__title">Potential Threats</p>
        <div className="topics__card-wrap">
          {data.map((item, i) => {
            return <Card key={i} title={item.title} image={item.image} />;
          })}
        </div>
      </div> */}
    </>
  );
};
SignupTopics.getInitialProps = async ({ asPath }) => {
  const USER_ID_PATH_INDEX = 1;
  console.log(asPath.split("/"));
  const cheeseId = asPath.split("/")[1];
  return { userId };
};
export default SignupTopics;
