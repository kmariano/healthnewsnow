import Card from "../../../../components/card";
import TopBar from "../../../../components/top-bar";
import fetch from "isomorphic-fetch";
import "./index.css";
import useSWR from "swr";
import { useState, useEffect } from "react";
import TopicsList from "../../../../components/topics-list";

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

const knownIllnesses = [
  "Coronavirus",
  "Vaping Lung Disease",
  "Ebola",
  "Influenza",
  "Cholera",
  "Meningitis"
];
const potentialThreats = [
  "Bioterrrorism",
  "Chemical Spill",
  "Unknown Outbreak"
];

const generateTopicSelections = topics => {
  console.log("Topics to generate", topics);
  const allTopics = [...knownIllnesses, ...potentialThreats];
  const topicSelections = allTopics.map(a => {
    const selected = topics.includes(a);
    return {
      title: a,
      imageUrl:
        "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541",
      selected
    };
  });
  return topicSelections;
};

const SignupTopics = ({ userId }) => {
  const { data, error } = useSWR(`/api/users/${userId}`, fetcher);
  const [userTopicSelections, setUserTopicSelections] = useState([]);
  useEffect(() => {
    if (data) {
      const topics = _.get(data, ".topics", []);
      setUserTopicSelections(generateTopicSelections(topics));
    }
  }, [data]);
  if (error) return <div>Error finding user with {userId}</div>;
  if (!data) return <div>Loading....</div>;

  const clearTopics = () => {
    const clearedTopics = userTopicSelections.map(u => {
      return { ...u, selected: false };
    });
    setUserTopicSelections(clearedTopics);
  };

  const onTopicsChanged = (title, selected) => {
    const changedTopics = userTopicSelections.map(u => {
      if (u.title === title) return { ...u, selected: !selected };
      else return u;
    });
    setUserTopicSelections(changedTopics);
  };

  const saveTopics = () => {
    const userTopics =
      userTopicSelections.filter(u => u.selected).map(u => u.title) || [];
    console.log("User Topics", userTopics);
    fetch(`/api/${userId}/topics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topics: userTopics
      })
    })
      .then(res => {
        return res.json();
      })
      .then(updatedUser => {
        console.log("User successfully updated", updatedUser);
      })
      .catch(error => {
        console.log("Error saving topics", error);
      });
  };

  let areOptionsSelected = false;
  userTopicSelections.forEach(t => {
    if (t.selected) areOptionsSelected = true;
  });

  return (
    <>
      <TopBar altColor />
      <div className="topics__banner">
        <p className="topics__banner-text">TOPIC SELECTION</p>
      </div>
      <div className="topics__container">
        <p className="topics__title">Known Illnesses</p>
        <TopicsList
          topics={userTopicSelections.filter(u =>
            knownIllnesses.includes(u.title)
          )}
          onTopicsUpdated={onTopicsChanged}
        />
      </div>

      <div className="topics__container">
        <p className="topics__title">Potential Threats</p>
        <TopicsList
          topics={userTopicSelections.filter(u =>
            potentialThreats.includes(u.title)
          )}
          onTopicsUpdated={onTopicsChanged}
        />
      </div>

      <div style={{ height: 100 }} />

      <div className="topics__buttons-container">
        <div className="topics__buttons-container--max-width">
          <button
            className="topics__clear-button"
            style={{ marginRight: 24 }}
            onClick={clearTopics}
          >
            Clear
          </button>
          <button
            className={
              !areOptionsSelected
                ? "topics__clear-button"
                : "topics__confirm-button"
            }
            onClick={!areOptionsSelected ? () => {} : saveTopics}
          >
            Submit
          </button>
        </div>
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
export default SignupTopics;
