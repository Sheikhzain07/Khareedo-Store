import HeroSec from "./Components/HeroSec";
import { useProductContext } from "./context/ProductContext";

export const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Zain Ecommerce",
  };
  return (
    <div>
      {myName}
      <HeroSec myData={data} />
    </div>
  );
};
