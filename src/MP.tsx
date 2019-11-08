import React from "react";

type MPProps = {
  firstName: string;
  lastName: string;
  thumbnail: { url: string; width: number; height: number };
  party: string;
  constituency: string;
  currentPositions: string[];
};

const MP = ({
  firstName,
  lastName,
  thumbnail,
  constituency,
  party
}: MPProps) => {
  return (
    <div>
      <h1>
        {firstName} <span>{lastName}</span>
      </h1>
      <h2>{party}</h2>
      <h3>{constituency}</h3>
      <img
        src={thumbnail.url}
        width={thumbnail.width}
        height={thumbnail.height}
        alt={`${firstName} ${lastName}`}
      />
    </div>
  );
};

export { MP };
