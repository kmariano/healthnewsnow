import TopBar from "../../../../components/top-bar";
import "./index.css";
import SignupTopics from "../topics";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";

const DATA = [
  {
    title: "Coronavirus",
    articles: [
      "Something bad is happening!",
      "Some person just got infected..."
    ]
  },
  {
    title: "Chemical Spill",
    articles: [
      "Something else bad is happening!",
      "Some other person just got infected..."
    ]
  }
];

async function fetcher(path) {
  const res = await fetch(path);
  const json = await res.json();
  return json;
}

const SignupSuccess = ({ userId }) => {
  const { data, error } = useSWR(`/api/users/${userId}`, fetcher);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    if (data) {
      setCurrentUser(data);
    }
  }, [data]);
  if (error) return <div>Error finding user with {userId}</div>;
  if (!data) return <div>Loading....</div>;
  return (
    <>
      <TopBar altColor />

      <div className="signup-success__banner">DASHBOARD</div>

      <div className="signup-success__max-width">
        <p className="signup-success__title--big">User's Dashboard</p>
        <p className="signup-success__title">Topics Selected</p>

        {DATA.map((item, i) => {
          return (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? "signup-success__container--green"
                  : "signup-success__container"
              }
            >
              <p className="signup-success__article-title">{item.title}</p>
              {item.articles.map(a => {
                return <p className="signup-success__article-item">{a}</p>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

SignupTopics.getInitialProps = async ({ asPath }) => {
  const USER_ID_PATH_INDEX = 2;
  console.log(asPath.split("/"));
  const userId = asPath.split("/")[USER_ID_PATH_INDEX];
  return { userId };
};

export default SignupSuccess;
