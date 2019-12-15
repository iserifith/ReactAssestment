import React, { useState } from "react";

const ExtendText = ({ children, limit }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(prevState => !prevState);
  };

  const renderContent = () => {
    if (children.length > limit && !expanded) {
      return (
        <span>
          {children.substring(0, limit)}...
          <button
            className="outline-none font-extrabold block"
            onClick={toggleExpand}
          >
            Read more
          </button>
        </span>
      );
    }

    return (
      <span>
        {children}
        <button
          className="outline-none font-extrabold block"
          onClick={toggleExpand}
        >
          Read less
        </button>
      </span>
    );
  };

  return <div>{renderContent()}</div>;
};

export default ExtendText;
