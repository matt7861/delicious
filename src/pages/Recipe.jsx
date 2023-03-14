import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [selectedButton, setSelectedButton] = useState("instructions");

  useEffect(() => {
    picksData(id);
  }, [id]);

  const picksData = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=1db27816f3f84f5191960da94a87e429
`
    );
    const data = await api.json();
    setRecipe(data);
  };

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LeftCol>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </LeftCol>
      <RightCol>
        <Button
          isSelected={selectedButton === "instructions"}
          onClick={() => handleButtonClick("instructions")}
        >
          Instructions
        </Button>
        <Button
          isSelected={selectedButton === "ingredients"}
          onClick={() => handleButtonClick("ingredients")}
        >
          Ingredients
        </Button>
        {selectedButton === "instructions" ? (
          <div>
            <Description dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </div>
        ) : (
          <div>
            {recipe && recipe.extendedIngredients && (
              <ul>
                {recipe.extendedIngredients.map((instructions, index) => (
                  <li key={index}>{instructions.original}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </RightCol>
    </Container>
  );
};

const Button = styled(motion.div)`
  background-color: white;
  color: black;
  border: 2px solid black;
  padding: 0.8rem 1.9rem;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  margin: 0 1.5rem 1.5rem 0;
  ${({ isSelected }) =>
    isSelected &&
    `
    color: white;
    background: rgb(60, 59, 60);
  `}
`;

const Description = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  margin-top: 70px;
  padding-bottom: 70px;
`;

const RightCol = styled.div`
  width: 50%;
  a {
    color: black;
  }
  li {
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 18px;
  }
`;

const LeftCol = styled.div`
  width: 50%;
  padding-right: 130px;
  h2 {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
  }
`;
