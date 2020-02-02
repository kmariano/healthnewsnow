import fetch from "unfetch";
import useSWR from "swr";
import { useRouter } from "next/router";

import Card from "../../components/card";
import TopBar from "../../components/top-bar";
import "./index.css";

const API_URL = "http://localhost:3000";
async function fetcher(path) {
  const res = await fetch(API_URL + path);
  const json = await res.json();
  return json;
}

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

const UserProfile = props => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: user, error } = useSWR(`/api/users/${userId}`, fetcher);

  if (error) return <h1>404</h1>;
  if (!user) return <div>Loading...</div>;

  return (
    <>
      <TopBar altColor />

      <div className="topics__banner">
        <p className="topics__banner-text">TOPIC SELECTION</p>
      </div>

      <div className="topics__container">
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
      </div>
    </>
  );
};

export default UserProfile;
