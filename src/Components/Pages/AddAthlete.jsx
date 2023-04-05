import React, { useState, useEffect } from "react";
import axios from "axios";

const AddAthlete = () => {
  const [athletes, setAthletes] = useState([]);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bio, setBio] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sport, setSport] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingAthlete, setEditingAthlete] = useState(null);
  const [athleteNumber, setathleteNumber] = useState(null);

  useEffect(() => {
    getAthletes();
  }, []);

  const getAthletes = async () => {
    const response = await axios.get("http://localhost:3030/api/get");
    setAthletes(response.data);
  };

  const addAthlete = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3030/api/create", {
      name,
      photoUrl,
      bio,
      height,
      weight,
      age,
      sport,
    });
    getAthletes();
    setName("");
    setPhotoUrl("");
    setBio("");
    setHeight("");
    setWeight("");
    setAge("");
    setSport("");
  };

  const deleteAthlete = async (athleteNumber) => {
    await axios.delete(
      `http://localhost:3030/api/delete/${athleteNumber}`
    );
    getAthletes();
  };

  const editAthlete = (athlete) => {
    setIsEditing(true);
    setEditingAthlete(athlete);
    setName(athlete.name);
    setPhotoUrl(athlete.photoUrl);
    setBio(athlete.bio);
    setHeight(athlete.height);
    setWeight(athlete.weight);
    setAge(athlete.age);
    setSport(athlete.sport);
  };

  const updateAthlete = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3030/api/update/${editingAthlete.athleteNumber}`, {
      name,
      photoUrl,
      bio,
      height,
      weight,
      age,
      sport,
    });
    setIsEditing(false);
    setEditingAthlete(null);
    getAthletes();
    setName("");
    setPhotoUrl("");
    setBio("");
    setHeight("");
    setWeight("");
    setAge("");
    setSport("");
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const athlete = {
      athleteNumber: setAthleteNumber(),
      name: name,
      photoUrl: photoUrl,
      bio: bio,
      height: height,
      weight: weight,
      age: age,
      sport: sport
    };
  
    axios.post('/api/create', athlete)
      .then((res) => {
        console.log(res);
        setName("");
        setPhotoUrl("");
        setBio("");
        setHeight("");
        setWeight("");
        setAge("");
        setSport("");
      
      })
      .catch((err) => {
        console.log(err);
       
      });
  };
  

    const setAthleteNumber = () => {
      let newAthleteNumber = 0;
      axios.get('http://localhost:3030/api/get')
        .then(res => {
          const athletes = res.data;
          if (athletes.length > 0) {
            newAthleteNumber = Math.max(...athletes.map(athlete => athlete.athleteNumber)) + 1;
          }
        })
        .catch(err => {
          console.log(err);
        });
      return newAthleteNumber;
    }
    

    // If athleteNumber is set, update athlete
    if (athleteNumber) {
      editAthlete({
        athleteNumber,
        name,
        photoUrl,
        bio,
        height,
        weight,
        age,
        sport
      });
    } else {
      // Otherwise, add new athlete
      addAthlete({
        name,
        photoUrl,
        bio,
        height,
        weight,
        age,
        sport
      });
    }

  
  return (
    <div>
      <form onSubmit={isEditing ? updateAthlete : addAthlete}>
      
        <h2>Add/Edit Athlete</h2>
     
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      
        <div>
          <label htmlFor="photoUrl">Photo URL:</label>
          <input
            type="text"
            id="photoUrl"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>
       
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
       
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}/>
            </div>

<div>
<label htmlFor="weight">Weight:</label>
<input type="text" id="weight" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
</div>

<div>
<label htmlFor="age">Age:</label>
<input type="text" id="age" name="age" value={age} onChange={(event) => setAge(event.target.value)} />
</div>

<div>
<label htmlFor="sport">Sport:</label>
<input type="text" id="sport" name="sport" value={sport} onChange={(event) => setSport(event.target.value)} />
</div>

<div>
<button type="submit">{athleteNumber ? 'Update' : 'Add'}</button>
{athleteNumber && <button onClick={addAthlete}>Add</button>}
</div>

<div>
<button type="delete">{athleteNumber ? 'Delete' : 'Delete'}</button>
{athleteNumber && <button onClick={deleteAthlete}>Delete</button>}
</div>
       </form>
    </div>
  );
};


export default AddAthlete;