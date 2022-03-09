import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './style.scss';
import { Loading } from '../../components/Loading';

import { apiCall, Joke } from '../../services/api';
import { Button } from "../../components/Button";

const Category = () => {
  const { categoryName } = useParams();
  const [joke, setJoke] = useState<Joke | null>({} as Joke);
  
  const getJoke = useCallback(async () => {
    setJoke(null);
    const dataRequest = await apiCall(`random?category=${categoryName}`);
    setJoke(dataRequest);
  }, [categoryName]);

  useEffect(() => {
    getJoke()
  }, [getJoke]);

  return (
    <>
      { !joke ? <Loading /> : <h2>{joke?.value}</h2> }
      <Button 
        action = {getJoke} 
        disabled = {!joke ? true : false} 
        text = 'Load Joke'
      />
      <Link to='/' className="linkButton">Home</Link>
    </>
  );
}

export default Category;
