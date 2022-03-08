import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="category/:categoryName" element = {<Category />} />
    </Routes>
  )
}
