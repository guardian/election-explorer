import React from "react";
import ReactDOM from "react-dom";
import { MP } from "./src/MP";
import styled from "styled-components";

type MPRecord = {
  member_id: string;
  house: string;
  constituency: string;
  party: string;
  entered_house: string;
  left_house: string;
  entered_reason: string;
  left_reason: string;
  person_id: string;
  lastupdate: string;
  title: string;
  given_name: string;
  family_name: string;
  full_name: string;
  url: string;
  image: string;
  image_height: number;
  image_width: number;
  office: {
    moffice_id: string;
    dept: string;
    position: string;
    from_date: string;
    to_date: string;
    person: string;
    source: string;
  }[];
};

const Wrapper = styled.div`
  background-color: white;
  bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  position: fixed;
  right: 10px;
  width: 100%;
  z-index: 9999;
`;

class App extends React.Component<{}, { mp: null | MPRecord }> {
  constructor(props: any) {
    super(props);
    this.state = { mp: null };
    (window as any).setMP = (mp: MPRecord) => this.setState({ mp });
  }

  render() {
    const { mp } = this.state;
    return (
      <Wrapper
        style={{
          opacity: mp ? 1 : 0,
          transform: `translateY(${mp ? `-30px` : "0"})`,
          transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        {mp && (
          <>
            <button
              style={{
                position: "absolute",
                bottom: "100%",
                borderRadius: "100%",
                marginBottom: 10,
                right: 0,
                height: 40,
                width: 40
              }}
              onClick={() => this.setState({ mp: null })}
            >
              ╳
            </button>
            <MP
              firstName={mp.given_name}
              lastName={mp.family_name}
              currentPositions={mp.office.map(o => o.position)}
              thumbnail={{
                url: `https://www.theyworkforyou.com${mp.image}`,
                width: mp.image_width,
                height: mp.image_height
              }}
              constituency={mp.constituency}
              party={mp.party}
            />
          </>
        )}
      </Wrapper>
    );
  }
}

(window as any).mount = (node: HTMLElement) => {
  ReactDOM.render(<App />, node);
};

export { App };
