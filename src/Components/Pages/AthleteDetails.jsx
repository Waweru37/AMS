import React from 'react';

function AthleteDetails({ athlete }) {
  return (
    <div>
      <h2>{athlete && athlete.name}</h2>
      <img src={athlete && athlete.photoUrl} alt={athlete && athlete.name} />
      <p>{athlete && athlete.bio}</p>
      <h3>Stats</h3>
      <ul>
        <li>Height: {athlete && athlete.height}</li>
        <li>Weight: {athlete && athlete.weight}</li>
        <li>Age: {athlete && athlete.age}</li>
        <li>Sport: {athlete && athlete.sport}</li>
      </ul>
    </div>
  );
}

export default AthleteDetails;
