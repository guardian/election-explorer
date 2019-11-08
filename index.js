import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mp: null };
    window.setMP = mp => this.setState({ mp });
  }

  render() {
    const { mp } = this.state;
    return (
      mp && (
        <div style={{ position: "fixed", bottom: 10, right: 10 }}>
          <button onClick={() => this.setState({ mp: null })}>Close</button>
          {mp.given_name}
        </div>
      )
    );
  }
}

window.mount = node => {
  ReactDOM.render(<App />, node);
};

export { App };

console.log("inside", window.mount);

console.log("finished");
