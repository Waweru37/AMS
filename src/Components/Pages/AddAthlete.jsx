import React, { useState } from 'react';

function AddAthlete({ onSubmit }) {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [bio, setBio] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [sport, setSport] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const athlete = {
      name,
      photoUrl,
      bio,
      height,
      weight,
      age,
      sport,
    };
    onSubmit(athlete);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="h2">Add Athlete</h2>
      <div class="div1">
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      </div>

      &nbsp;
      <div class="div1">
      <label>
        Photo URL:
        <input type="text" value={photoUrl} onChange={event => setPhotoUrl(event.target.value)} />
      </label>
      </div>

      &nbsp;
      <div class="div1">
      <label>
        Bio:
        <textarea value={bio} onChange={event => setBio(event.target.value)} />
      </label>
      </div>

      &nbsp;
      <div class="div1">
      <label>
        Height:
        <input type="text" value={height} onChange={event => setHeight(event.target.value)} />
      </label>
      </div>

      &nbsp;
      <div class="div1">
      <label>
        Weight:
        <input type="text" value={weight} onChange={event => setWeight(event.target.value)} />
      </label>
      </div>

      &nbsp;
      <div class="div1">
      <label>
        Age:
        <input type="text" value={age} onChange={event => setAge(event.target.value)} />
      </label>
     </div>

     &nbsp;
      <div class="div1">
      <label>
        Sport:
        <input type="text" value={sport} onChange={event => setSport(event.target.value)} />
      </label>
      </div>

    <button type="submit" class="button">Add Athlete</button>

</form>
);
}

export default AddAthlete;
