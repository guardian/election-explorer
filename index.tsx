import React from "react";
import ReactDOM from "react-dom";
import { MP } from "./src/MP";

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

class App extends React.Component<{}, { mp: null | MPRecord }> {
  constructor() {
    super({});
    this.state = { mp: null };
    (window as any).setMP = (mp: MPRecord) => this.setState({ mp });
  }

  render() {
    const { mp } = this.state;
    return (
      mp && (
        <div style={{ position: "fixed", bottom: 10, right: 10 }}>
          <button onClick={() => this.setState({ mp: null })}>Close</button>
          <MP firstName={mp.given_name} />
        </div>
      )
    );
  }
}

(window as any).mount = (node: HTMLElement) => {
  ReactDOM.render(<App />, node);
};

export { App };
