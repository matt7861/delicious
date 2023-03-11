import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@splidejs/react-splide/css";

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    popularData();
  }, []);

  const popularData = async () => {
    // Check if array is saved to local so we don't need to call api on each reload
    const localObject = localStorage.getItem("popular");

    if (localObject) {
      setPopular(JSON.parse(localObject));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1db27816f3f84f5191960da94a87e429&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <SliderContainer>
      <h2>Trending</h2>
      <Splide
        options={{
          drag: "free",
          perPage: 4,
          arrows: false,
          pagination: false,
          rewind: false,
          gap: "4rem",
        }}
      >
        {popular.map((recipe, index) => (
          <SplideSlide key={index}>
            <Link to={`/recipe/${recipe.id}`}>
              <SliderImage>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </SliderImage>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin: 4rem 0rem 0rem;
  padding-bottom: 4rem;
  h2 {
    color: #000;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

const SliderImage = styled.div`
  color: #fff;
  text-align: center;
  position: relative;
  height: 350px;
  border-radius: 25px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    position: absolute;
    bottom: 0;
    padding: 0 15px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    z-index: 2;
  }
`;
