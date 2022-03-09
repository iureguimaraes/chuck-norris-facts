import { Link } from "react-router-dom";
import { HomeLink } from './style';

import brand from './../../assets/chuck-logo.png';

export const Brand = () => (
  <HomeLink>
    <Link to="/">
      <img src={brand} alt="Chuck Norris Facts" />
    </Link>
  </HomeLink>
);
