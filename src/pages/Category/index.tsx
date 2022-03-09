import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { apiCallJoke, Joke } from '../../services/api';

const Category = () => {
  const { categoryName } = useParams();
  const [joke, setJoke] = useState<Joke | null>({} as Joke);
  
  async function getJoke() {
    const dataRequest = await apiCallJoke(`random?category=${categoryName}`);
    setJoke(dataRequest);
  }

  useEffect(() => {
    getJoke()
  }, []);

  return (
    <>
      <h2>{joke?.value}</h2>
      <button onClick = {getJoke}>Carregar outra</button>
      <Link to='/'>Home</Link>
    </>
  );
}

export default Category;
