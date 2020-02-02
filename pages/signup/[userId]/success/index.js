import TopBar from "../../../../components/top-bar";
import "./index.css";
import useSWR from "swr";
import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import _ from 'lodash';
import queryString from 'query-string';

const BASE_SEARCH_URL = 'https://www.googleapis.com/customsearch/v1?';

async function fetcher(path) {
  const res = await fetch(path);
  const json = await res.json();
  return json;
}

const SignupSuccess = ({ userId }) => {
  const { data, error } = useSWR(`/api/users/${userId}`, fetcher);
  const [currentUser, setCurrentUser] = useState({});
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data) {
      setCurrentUser(data);
    }
  }, [data]);

  useEffect(() => {
    if (!_.isEmpty(currentUser)) {
      const query = queryString.stringify({
        key: process.env.googleAPIKey,
        cx: process.env.googleSearchCX,
        q: `${currentUser.topics[0]} "${currentUser.city}"`
      });

      fetch(BASE_SEARCH_URL + query)
        .then(res => res.json())
        .then(data => {
          setArticles(data.items.slice(0, 3))
          return data.items.slice(0, 3);
        })
        .then(newArticles => {
          return fetch(`/api/${currentUser.id}/latest-news`, {
            method: 'POST',
            body: JSON.stringify({
              to: currentUser.phoneNumber,
              message: `
                Thank you for signing up for HealthNewsNow.\n
                Here is an update on the topic ${currentUser.topics[0]}\n
                ${newArticles[0].title}\n
                ${newArticles[0].link}\n
                ${newArticles[1].title}\n
                ${newArticles[1].link}\n
                ${newArticles[2].title}\n
                ${newArticles[2].link}
              `
            })
          });
        })
        .then(console.log)
        .catch(console.error);
    }
  }, [currentUser]);

  if (error) return <div>Error finding user with {userId}</div>;
  if (!data || _.isEmpty(currentUser)) return <div>Loading....</div>;
  return (
    <>
      <TopBar altColor />

      <div className="signup-success__banner">DASHBOARD</div>

      <div className="signup-success__max-width">
        <p className="signup-success__title--big">{`${currentUser.name}'s Dashboard`}</p>
        <p className="signup-success__title">Topics Selected</p>

        <div className={"signup-success__container--green"}>
          <p className="signup-success__article-title">{currentUser.topics[0]}</p>
          {articles.map(a => {
            return <p key={a.title} style={{ padding: '12px 0' }}><a href={a.link} className="signup-success__article-item">{a.title}</a></p>;
          })}
        </div>
      </div>
    </>
  );
};

SignupSuccess.getInitialProps = async ({ asPath }) => {
  const USER_ID_PATH_INDEX = 2;
  console.log(asPath.split("/"));
  const userId = asPath.split("/")[USER_ID_PATH_INDEX];
  return { userId };
};

export default SignupSuccess;
