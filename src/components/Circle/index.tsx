import { Link } from "react-router-dom";

import { CategoryItem } from './style';

interface Category {
  category: string;
};

export const Circle = ({category}: Category) => {
  return (
    <CategoryItem className={category}>
      <Link to={`category/${category}`}>{category}</Link>
    </CategoryItem>
  );
};
