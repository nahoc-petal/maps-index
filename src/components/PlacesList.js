import React from 'react';

const renderPlaces = () => {
  /*const places = [];
  array.forEach(place => {
    places.push(

    );
  });*/
  return(
    <li className="level" style={{
      paddingTop: 30,
      paddingBottom: 30,
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    }}>
      <div className="level-left">
        <div style={{
          backgroundImage: 'url(https://www.master.ca/sn_uploads/img_dealer/Induktion_Profile_G-1.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: 100,
          height: 100,
          borderRadius: 50,
          marginRight: 30,
        }} />
        <div>
          <h2 className="subtitle">RÉFRIGÉRATION EVEREST INC.</h2>
          <h3>553 Boul. Charest Ouest, Québec (Québec), G1N 2B6</h3>
          <h4>(418) 622-7245</h4>
          <h5>Marques distribuées : York, Fujitsu, vänEE, Sanuvox, Gree</h5>
        </div>
      </div>

      <button className="button is-primary is-medium">
        CTA
      </button>
    </li>
  );
}

const PlacesList = () => (
  <section>
    <ul>
      {renderPlaces()}
    </ul>
  </section>
);

export default PlacesList;