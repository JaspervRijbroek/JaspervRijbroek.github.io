import React from "react"
import {Link} from "gatsby";

export default class TopicList extends React.Component {
    getTopicName(topic) {
        return topic
            .split(' ')
            .map(function (part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            })
            .join(' ')
    }

    render(args) {
        return (
            <span className="topics">
                <span> in </span>

                {this.props.topics.map((topic, index) => (
                    <Link className="topics__list" to={`/topic/${topic.slug}`} key={index}>
                        {topic.title}
                    </Link>
                ))}
            </span>
        );
    }
}