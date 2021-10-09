// Node Modules
import React from "react";
// import ParkForm from "./ParkForm";
import axios from "axios";

class Park extends React.Component {
  state = {
    records: [],
    parkDB: [],
  };
  savePark = (park) => {
    console.log(park);
    axios.post("/api/savepark", park).then((result) => {
      console.log("Park saved");
    });
  };
  componentDidMount = () => {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?parkCode=np49&api_key=em9tUC920fypAgMENGc0OWfY7SfamU6icv4nEdsk"
      )
      .then((records) => {
        console.log("Records", records);
        var parkData = records.data.data;
        var parkDB = [];
        for (let i = 0; i < parkData.length; i++) {
          let parkrecord = {
            name: parkData[i].fullName,
            src: parkData[i].images[0].url,
            description: parkData[i].description,
            address:
              parkData[i].addresses[0].line1 +
              " ," +
              parkData[i].addresses[0].line2 +
              " ," +
              parkData[i].addresses[0].line3 +
              parkData[i].addresses[0].city +
              " ," +
              parkData[i].addresses[0].stateCode +
              parkData[i].addresses[0].postalCode,
            website: parkData[i].url,
          };
          parkDB.push(parkrecord);
        }
        console.log(parkDB);
        this.setState({ parkDB: parkDB });
      });
  };
  render() {
    let destinations = [
      {
        image: "/images/Yellowstone.jpeg",
        type: "National Park",
        site_name: "Yellow Stone National Park",
        site_location: "WY",
        site_url: "https://www.nps.gov/yell/index.htm",
        site_address: {
          type: "Physical",
          line1: "2 Officers Row",
          line2: "Yellowstone National Park Headquarters",
          line3: "",
          city: "Yellowstone National Park",
          stateCode: "WY",
          postalCode: "82190",
        },
        description:
          "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.",
      },
    ];
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {destinations.map((destination, key) => (
          <div className="card" style={{ width: "33%;" }}>
            <img
              className="card-img-top"
              src={destination.image}
              width={400}
              height={400}
              alt={key}
            />
            <div className="card-body">
              <h5 className="card-title">{destination.site_name}</h5>
              {/* <p className="card-text">Visit the Links</p> */}
              <p className="card-text">{destination.description}</p>
              <a
                href={destination.site_url}
                className="btn btn-primary button:hover"
              >
                Website
              </a>
              {/* <a href={destination.description} className="btn btn-primary">
                Description
              </a> */}
            </div>
          </div>
        ))}
        <div>
          {this.state.parkDB.map((park, key) => (
            <div className="card">
              <h5 className="card-title">{park.name}</h5>
              <p className="card-text">{park.description}</p>
              <h6>{park.address}</h6>
              <img
                src={park.src}
                className="card-img-top"
                width={200}
                height={200}
                alt={key}
              />
              <a href={park.url} className="btn btn-primary button:hover">
                Website
              </a>
              {/* <button onClick={this.savePark(park)}>Save</button> */}
            </div>
          ))}
        </div>
        <div className="container">{/* <ParkForm /> */}</div>
      </div>
    );
  }
}

export default Park;
