import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react-17";


// Nu am reusit sa o stilizez

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [{ latitude: 44.45118, longitude: 26.00669 }],
    };
  }
  drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return (
        <Marker
          key={i}
          id={i}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("Event Hanlder Called")}
        />
      );
    });
  };
  render() {
    return (
      <div>
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 44.45118,
          lng: 26.00669,
        }}
      >
        {this.drawMarker()}
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCBREbv1eoSMUUKu1Kcd-cMVS1aIwDJwuY",
})(GoogleMapComponent);
