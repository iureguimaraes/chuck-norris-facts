import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      {categories?.map(category => (
        <li key={category} className={category}>
          <Link to={`category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
