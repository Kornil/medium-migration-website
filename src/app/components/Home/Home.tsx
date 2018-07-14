import * as React from "react";

interface Homeprops {
  user: string;
}

export const Home: React.SFC<Homeprops> = ({ user }) => (
  <div>
    <h2>Home Page</h2>
    <p>Hello {user}</p>
  </div>
);
