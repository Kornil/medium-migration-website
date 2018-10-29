import React from "react";

const Story: React.SFC<{ story: any }> = ({ story }) => <p>{story.title}</p>;

export default Story;
