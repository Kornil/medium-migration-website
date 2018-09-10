import React from "react";

interface Homeprops {
  user?: string;
}

const Home: React.SFC<Homeprops> = ({ user }) => <div />;

Home.defaultProps = {
  user: "Default User"
};

export default Home;
