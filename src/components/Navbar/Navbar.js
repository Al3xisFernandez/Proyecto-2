import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Butonburger from "./Butonburger";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <ul>
            <li>
              <Link onClick={handleClick} to="/">
                INICIO
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/productos">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/QuienesSomos">
                QUIENES SOMOS
              </Link>
            </li>
          </ul>
        </div>
        <div className="burguer">
          <Butonburger clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    margin: auto;

    top: 300px;
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    z-index: 4;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      z-index: 4;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  background-color: #291;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 558px) {
      border-radius: 0 0 60% 0;
    }
    @media (max-width: 388px) {
      border-radius: 0 0 40% 0;
    }
  }
`;
