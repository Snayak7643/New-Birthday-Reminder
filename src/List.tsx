import React, { useState } from "react";
import Users from "./data";

const List = () => {
  const [peoples, setPeoples] = useState(Users);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <h2>Say Happy Birthday!!</h2>
      <div className="container">
        {peoples.map((people) => {
          return (
            <div className="person" key={people.id}>
              <img src={people.image} alt="DP" />
              <h3>{people.name}</h3>
              <h4>{people.age} years</h4>
            </div>
          );
        })}
        <input
          className="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="age"
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const intAge = parseInt(age);
            let nid =
              peoples.length >= 1 ? peoples[peoples.length - 1].id + 1 : 1;
            if (!isNaN(intAge) && name !== "") {
              setPeoples([
                ...peoples,
                { id: nid, name: name, age: intAge, image: "" },
              ]);
              setName("");
              setAge("");
            } else {
              alert("Valid Age or Name");
            }
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setPeoples([]);
            setName(" ");
            setAge(" ");
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default List;
