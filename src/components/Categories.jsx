import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/Gi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Categories = () => {
  const checkPathway = useLocation().pathname;

  return (
    <LinkContainer>
      <Icon
        className={checkPathway === "/cuisine/italian" ? "active" : ""}
        to="/cuisine/italian"
      >
        <FaPizzaSlice />
        <span>Italian</span>
      </Icon>
      <Icon
        className={checkPathway === "/cuisine/american" ? "active" : ""}
        to="/cuisine/american"
      >
        <FaHamburger />
        <span>American</span>
      </Icon>
      <Icon
        className={checkPathway === "/cuisine/thai" ? "active" : ""}
        to="/cuisine/thai"
      >
        <GiNoodles />
        <span>Thai</span>
      </Icon>
      <Icon
        className={checkPathway === "/cuisine/japanese" ? "active" : ""}
        to="/cuisine/japanese"
      >
        <GiChopsticks />
        <span>Japanese</span>
      </Icon>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Icon = styled(Link)`
  background: rgb(60, 59, 60);
  color: white;
  text-decoration: none;
  font-size: 0.6rem;
  border-radius: 50%;
  height: 4.5rem;
  width: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0rem 1.1rem;
  &.active {
    background: linear-gradient(
      90deg,
      rgba(245, 109, 39, 1) 0%,
      rgba(234, 67, 84, 1) 55%
    );
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-bottom: 0.1rem;

    path {
      fill: #fff;
    }
  }
`;
