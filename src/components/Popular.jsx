import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
        `https://api.spoonacular.com/recipes/random?apiKey=776121d190d94d40a4ca785be0d37da4&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
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
            <SliderImage>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </SliderImage>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

const SliderImage = styled.div`
  color: #fff;
  text-align: center;
  position: relative;

  img {
    border-radius: 15px;
    height: 300px;
  }

  h4 {
    position: absolute;
    bottom: 30px;
    padding: 0 15px;
    left: 0;
    width: 100%;
  }
`;
