import _ from "lodash";

import Card from "../card";
import "./styles.css";

const TopicsList = ({ topics, onTopicsUpdated }) => {
  if (_.isEmpty(topics)) return null;

  return (
    <div className="topic-list">
      {topics.map(topic => {
        return (
          <Card
            key={topic.title}
            title={topic.title}
            imageUrl={topic.imageUrl}
            selected={topic.selected}
            onClick={onTopicsUpdated}
          />
        );
      })}
    </div>
  );
};

export default TopicsList;
