import React from "react";

class ParkForm extends React.Component {
  state = {
    type: "1",
    site_name: "",
    site_country: "",
    site_url: "",
    site_address: "",
    description: "",
  };
  render() {
    return (
      <div className="testbox">
        <form action="/api/parks" method="post">
          <div className="banner">
            <h1>Virtual Trip Booking Form</h1>
          </div>

          <div className="item">
            <p>Category:</p>
            {/* <input type="text" id="site_type" /> */}
            <select>
              <option value="">*Please select*</option>
              <option value="1">National Park</option>
              <option value="2">Monument</option>
              <option value="3">Museum</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="nameofsite" className="form-label">
              Site Name:
            </label>
            <input type="nameofsite" className="form-control" id="site_name" />
          </div>

          <div className="item">
            <p>Description: </p>
            <input type="text" className="form-control" id="description" />
          </div>

          <div className="item, city-item">
            <p>Address:</p>
            <input type="text" id="type" placeholder="Physical or Mailing" />
            <input type="text" id="line1" placeholder="Street address" />
            <input type="text" id="line2" placeholder="Street address line 2" />
            <input type="text" id="line3" placeholder="Street address line 3" />
            <div className="city-item">
              <input type="text" id="city" placeholder="City" />
              <input type="text" id="statecode" placeholder="State" />
              <input
                type="text"
                id="postalcode"
                placeholder="Postal / Zip code"
              />
              <input type="text" id="country" placeholder="Country" />
            </div>
          </div>

          <div className="item">
            <p htmlFor="site_url" className="form-label">
              Website:
            </p>
            <input type="text" className="form-control" id="site_url" />
          </div>

          <div className="btn-block">
            <button type="submit" className="btn btn-primary" href="/">
              BOOK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ParkForm;
