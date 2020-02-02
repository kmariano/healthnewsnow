import _ from "lodash";
import "./styles.css";
import Card from "../card";
const TopicsList = ({ topics, onTopicsUpdated }) => {
  if (_.isEmpty(topics)) return null;
  return (
    <div className="topic-list">
      {topics.map(topic => {
        return (
          <Card
            topic={topic.title}
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
