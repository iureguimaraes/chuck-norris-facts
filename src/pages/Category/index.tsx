import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { apiCall, Joke } from '../../services/api';

const Category = () => {
  const { categoryName } = useParams();
  const [joke, setJoke] = useState<Joke | null>({} as Joke);
  
  const getJoke = useCallback(async () => {
    const dataRequest = await apiCall(`random?category=${categoryName}`);
    setJoke(dataRequest);
  }, [categoryName]);

  useEffect(() => {
    getJoke()
  }, [getJoke]);

  return (
    <>
      <h2>{joke?.value}</h2>
      <button onClick = {getJoke}>Carregar outra</button>
      <Link to='/'>Home</Link>
    </>
  );
}

export default Category;
