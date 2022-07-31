import { Component } from "react";
import "./index.css";

class Course extends Component {
  state = { courseList: [], error: "" };

  componentDidMount() {
    this.getResource();
  }

  getResource = async () => {
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok === true) {
      const updateData = data.map((each) => ({
        category: each.category,
        description: each.description,
        title: each.title,
        iconUrl: each.icon_url,
        id: each.id,
        link: each.link,
        tag: each.tag,
      }));
      this.setState({ courseList: updateData });
    } else {
      this.setState({ error: data.errMsg });
    }
  };

  onEnterText = (event) => {
    const { courseList } = this.state;
    const v = event.target.value.toLowerCase();
    const filterList = courseList.filter((each) =>
      each.title.toLowerCase().includes(v)
    );
    this.setState({ courseList: filterList });
  };

  render() {
    const { courseList, error } = this.state;
    const { activeId } = this.props;
    const active = activeId.length - 1;
    let changeList = courseList;
    if (activeId !== "RESOURCES") {
      changeList = courseList.filter(
        (each) =>
          each.tag.toLowerCase() === activeId.slice(0, active).toLowerCase()
      );
    }

    return (
      <>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            size="70"
            onChange={this.onEnterText}
          />
        </div>
        {changeList.length > 0 ? (
          <ul className="card-container">
            {changeList.map((each) => (
              <li className="card" key={each.id}>
                <div className="img-container">
                  <img
                    src={each.iconUrl}
                    alt={each.title}
                    className="card-image"
                  />
                  <div>
                    <h1 className="card-heading">{each.title}</h1>
                    <p className="card-description">{each.category}</p>
                  </div>
                </div>
                <a href={each.link} className="web-link">
                  www.{each.link.split("//")[1]}
                </a>
                <p className="card-para">{each.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>{error}</div>
        )}
      </>
    );
  }
}

export default Course;
