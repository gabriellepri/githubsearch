import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage"
import { DataProvider } from "../context/DataContext"

const AppRoutes = () => {
  
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default AppRoutes