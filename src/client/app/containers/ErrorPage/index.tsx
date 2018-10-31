import React from "react";

import { Cta } from "app/containers/shared";

import Error from "assets/times-light.svg";

interface ErrorPageProps {
  error?: string | null;
}

const ErrorPage: React.SFC<ErrorPageProps> = props => (
  <Cta title={<Error />}>
    <p>Something went wrong, try refreshing the page.</p>
    {props.error ? <em>{props.error}</em> : null}
  </Cta>
);

export default ErrorPage;
