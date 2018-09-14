import React from "react";

interface Homeprops {
  user?: string;
}

const Home: React.SFC<Homeprops> = ({ user }) => <div className={user} />;

Home.defaultProps = {
  user: "Default User"
};

export default Home;
