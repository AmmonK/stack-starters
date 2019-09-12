import React from "react";
import axios from "axios";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/projects";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/projects";

    axios.get(url).then(response => this.setState({ projects: response.data }));
  }

  render() {
    return (
      <div>
        {this.state.projects.map(p => (
          <div key={p.id}>
            {p.id} : {p.name} : {p.createdBy}
          </div>
        ))}
      </div>
    );
  }
}

export default Project;
