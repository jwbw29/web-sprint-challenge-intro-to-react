// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
  width: 60%;
  /* display: flex; */
  /* justify-content: left; */
  /* align-items: left; */
  div.character {
    background-color: ${(pr) => pr.theme.primaryColor};
  }

  h1 {
    display: flex;
    flex-direction: row;
    text-align: left;
    font-family: "Ubuntu Mono", monospace;
    font-weight: 700;
    color: ${(pr) => pr.theme.primaryColor};
    text-shadow: -0.6px -0.6px 0 ${(pr) => pr.theme.secondaryColor},
      0.6px -0.6px 0 ${(pr) => pr.theme.secondaryColor},
      -0.6px 0.6px 0 ${(pr) => pr.theme.secondaryColor},
      0.6px 0.6px 0 ${(pr) => pr.theme.secondaryColor};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
  }
  /* button {
    display: flex;
    flex-direction: row;
    text-align: right;
    background-color: ${(pr) => pr.theme.secondaryColor};
    border-radius: 0px 999px 999px 999px;
    font-family: "Ubuntu Mono", monospace;
    font-size: 1.1rem;
    padding: 5px 15px;
    float: ;
  } */
`;

export default function Character({ name }) {
  return (
    <StyledCharacters>
      <div className="character">
        <h1>{name}</h1>
        {/* <button>Details</button> */}
      </div>
    </StyledCharacters>
  );
}
