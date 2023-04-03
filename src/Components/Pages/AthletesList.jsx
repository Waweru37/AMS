import React from 'react';

function AthleteList({ athletes }) {
  return (
    <div>
      <h2>Athletes</h2>
      <ul>
        {athletes && athletes.map(athlete => (
          <li key={athlete.id}>
            <img src={athlete.photoUrl} alt={athlete.name} />
            <h3>{athlete.name}</h3>
            <p>{athlete.sport}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AthleteList;