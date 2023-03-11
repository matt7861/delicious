import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export const Searched = () => {
  const { search } = useParams();
  const [cuisineData, setCuisineData] = useState([]);

  useEffect(() => {
    picksData(search);
  }, [search]);

  const picksData = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=1db27816f3f84f5191960da94a87e429&number=12&query=${name}`
    );
    const data = await api.json();
    setCuisineData(data.results);
  };

  return (
    <Grid>
      {cuisineData.map((recipe, index) => (
        <Card key={index}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
          </Link>
          <h4>{recipe.title}</h4>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  padding-bottom: 4rem;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    padding: 1rem;
    text-align: center;
  }
`;
