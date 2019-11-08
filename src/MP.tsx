import React, { useState } from "react";
import styled from "styled-components";

type MPProps = {
  firstName: string;
  lastName: string;
  thumbnail: { url: string; width: number; height: number };
  party: string;
  constituency: string;
  currentPositions: string[];
  votes?: string[];
};

const FlexHeader = styled.div`
  background-color: #f4f4f4;
  border-bottom: 2px solid ${props => props.color};
  display: flex;
`;

const FlexImage = styled.div``;

const FlexText = styled.div`
  flex-grow: 1;
  padding: 1em;
`;

const FirstName = styled.span`
  font-weight: 100;
  font-style: italic;
`;

const Info = styled.div`
  padding: 1rem;
`;

const getPartyColor = (party: string) => {
  return (
    ({
      labour: "#c70000",
      conservative: "#052962"
    } as { [key: string]: string })[party.toLowerCase()] || "black"
  );
};

const MP = ({
  firstName,
  lastName,
  thumbnail,
  constituency,
  party,
  currentPositions,
  votes
}: MPProps) => {
  const [showVotes, setShowVotes] = useState(false);
  return (
    <div>
      <FlexHeader color={getPartyColor(party)}>
        <FlexImage>
          <img
            style={{ display: "block" }}
            src={thumbnail.url}
            width={thumbnail.width}
            height={thumbnail.height}
            alt={`${firstName} ${lastName}`}
          />
        </FlexImage>
        <FlexText>
          <h1>
            <FirstName>{firstName}</FirstName> {lastName}
          </h1>
          <h2>{party}</h2>
          <h3>{constituency}</h3>
        </FlexText>
      </FlexHeader>
      <Info>
        <h4>Current positions</h4>
        <ul>
          {currentPositions.map(pos => (
            <li>{pos}</li>
          ))}
        </ul>
        <h4>
          Voting history{" "}
          {votes && (
            <small
              onClick={() => setShowVotes(prev => !prev)}
              style={{ color: getPartyColor(party), cursor: "pointer" }}
            >
              show
            </small>
          )}
        </h4>
        {votes && showVotes && (
          <ul style={{ fontSize: 14 }}>
            {votes.map(vote => (
              <div dangerouslySetInnerHTML={{ __html: vote }}></div>
            ))}
          </ul>
        )}
      </Info>
    </div>
  );
};

export { MP };
