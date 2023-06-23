import SearchBar from "../../components/SearchBar/SearchBar";
import UserList from "../../components/UserList/UserList";

import './HomePage.css'

const HomePage = () => {

  return (
    <main className="container">
      <SearchBar />
      <UserList />
    </main>
  );
}

export default HomePage