import React, { useState } from "react";
import { GrFormSearch } from "react-icons/Gr";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const getSearchResults = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchText);
  };

  return (
    <SearchContainer>
      <form onSubmit={getSearchResults}>
        <GrFormSearch />
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
      </form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  max-width: 690px;
  margin: auto;
  position: relative;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    path {
      stroke: #fff;
    }
  }
  input {
    width: 100%;
    background-color: rgb(60, 59, 60);
    border: none;
    border-radius: 15px;
    padding: 0.9rem 2.9rem;
    font-size: 1.1rem;
    color: rgb(255, 255, 255);
    &::placeholder {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
  }
`;
