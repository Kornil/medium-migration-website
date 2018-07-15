import React from "react";

interface Homeprops {
  user?: string;
}

const Home: React.SFC<Homeprops> = ({ user }) => (
  <div>
    <h2>Home Page</h2>
    <p>Hello {user}</p>
  </div>
);

Home.defaultProps = {
  user: "Default User"
};

export default Home;
