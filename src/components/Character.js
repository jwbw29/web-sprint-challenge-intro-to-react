// Write your Character component here
import React from "react";

export default function Character({ name }) {
  return (
    <div className="characters">
      <h1>{name}</h1>
    </div>
  );
}
