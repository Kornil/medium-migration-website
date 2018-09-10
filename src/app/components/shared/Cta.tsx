import React from "react";

import OwnerContext from "app/shared/OwnerContext";

const Cta = (props: any) => <h1>{props.OwnerContext.name}</h1>;

export default OwnerContext.connect(Cta);
