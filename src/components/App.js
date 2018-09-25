import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesList from './PlacesList';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="container">
        <div className="columns is-6 is-variable">
          <div className="column is-one-third">
            <h1 className="title">Annuaire des détaillants</h1>
            <div class="control has-icons-right">
              <input class="input is-medium" type="text" placeholder="Recherche" />
              <span class="icon is-right">
                <i class="fas fa-search"></i>
              </span>
            </div>

            <div class="field">
              <label class="label">Changez votre localisation</label>
              <div class="field">
                <p class="control">
                  <input class="input" type="text" placeholder="Recipient email" />
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div style={{ height: '300px', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'aaaaa' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={'Kreyser Avrora'}
                />
              </GoogleMapReact>
            </div>
            <PlacesList />
          </div>
        </div> 
      </div>
    );
  }
}

export default App;