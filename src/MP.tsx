import React from "react";

type MPProps = {
  firstName: string;
};

const MP = ({ firstName }: MPProps) => {
  return <div>{firstName}</div>;
};

export { MP };
