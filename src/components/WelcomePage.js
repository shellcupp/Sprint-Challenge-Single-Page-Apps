import React from "react";
import styled from "styled-components";

const Funimg = styled.img`
height: 35vh;
  width: 45%;
  margin: 0%, auto;
  object-fit: fill;
  animation-name: stretch;
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;

@keyframes stretch {
  0% {
    transform: scale(.2);
    border-radius: 100%;
  }
  100% {
    transform: scale(1);

  }
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Fan Site!</h1>
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/15.jpeg"
          alt="Alien Rick"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          alt="Summer"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="Beth"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          alt="Jerry"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
          alt="alien Morty"
        />{" "}
        <Funimg
          src="https://rickandmortyapi.com/api/character/avatar/17.jpeg"
          alt="Annie"
        />
      </header>
    </section>
  );
}
