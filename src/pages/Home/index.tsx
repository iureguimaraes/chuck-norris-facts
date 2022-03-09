import { useEffect, useState } from "react";
import './style.scss';
import { Loading } from '../../components/Loading';
import { Circle } from "../../components/Circle";

import { apiCall } from '../../services/api';

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);

  async function getCategories() {
    const dataRequest = apiCall(`categories`);
    console.log(dataRequest);
    setCategories(await dataRequest);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ul>
      { !categories.length && <Loading /> }
      {categories?.map(category => (
        <li key={category} className={category}>
          <Circle category={category} />
        </li>
      ))}
    </ul>
  );
}

export default Home;
