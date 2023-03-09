import { Popular } from "../components/Popular";
import { Veggies } from "../components/Veggies";
import { Nav } from "../components/Nav";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Veggies />
      <Popular />
    </div>
  );
};
