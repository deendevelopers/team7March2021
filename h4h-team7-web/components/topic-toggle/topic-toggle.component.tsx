import React, { useState } from "react";
export function TopicPanel() {
  const topics = [
    "Activity",
    "Skills",
    "Meet up",
    "Friendship",
    "Professional Advice",
  ];

  const [activeTopics, setActiveTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    if (activeTopics.includes(topic)) {
      setActiveTopics(activeTopics.filter((t) => t !== topic));
    } else {
      setActiveTopics([...activeTopics, topic]);
    }
  };

  return (
    <>
      {topics.map((topic) => {
        const isActive = activeTopics.includes(topic);

        const className = isActive
          ? "text-white bg-brick"
          : "text-brick bg-lightbrick";
        return (
          <button
            type="button"
            onClick={() => toggleTopic(topic)}
            className={`rounded-full font-semibold ${className} px-7 py-2 mr-3 mb-3`}
          >
            {topic}
          </button>
        );
      })}
    </>
  );
}
