import { Component } from "react";
import Head from "../Head";
import "./index.css";

class AddResource extends Component {
  onFormSubmit = async (event) => {
    const { username, link, area } = event.target.elements;
    event.preventDefault();
    const data = {
      name: username.value,
      link: link.value,
      description: area.value,
    };
    const reqoptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const res = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      reqoptions
    );
    if (res.status === 200) {
      console.log("success");
    } else {
      console.log("some error");
    }
  };

  render() {
    return (
      <div className="main">
        <Head />
        <div className="add-resource">
          <div>
            <p className="labels">Users</p>
            <form className="add-form" onSubmit={this.onFormSubmit}>
              <h1>Add a Resource</h1>
              <label htmlFor="username" className="labels">
                NAME
              </label>
              <input type="text" id="username" />
              <label htmlFor="link" className="labels">
                LINK
              </label>
              <input type="text" id="link" className="onlink" />
              <label htmlFor="area" className="labels" name="description">
                DESCRIPTION
              </label>
              <textarea id="area"></textarea>
              <p className="change">Change Photo</p>
              <button type="submit" className="create">
                CREATE
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dnmtqwagj/image/upload/v1659330625/practice_thk8lp.png"
              alt="add"
              className="addimg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddResource;
