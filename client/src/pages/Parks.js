// Node Modules
import React from "react";
import ParkForm from "./ParkForm";

function Park() {
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
            <p className="card-text">Visit the Links</p>
            <a href={destination.site_url} className="btn btn-primary">
              Website
            </a>
            <a href={destination.description} className="btn btn-primary">
              Description
            </a>
          </div>
        </div>
      ))}
      <div className="container">
        <ParkForm />
      </div>
    </div>
  );
}

export default Park;
