import { KeyboardEvent, useContext } from "react";

import { DataContext } from "../../context/DataContext";
import { DataContextType } from "../../types/DataContextType";

import './SearchBar.css'

const SearchBar = () => {
  const { searchValue, handleSearchInputChange, searchUsers } = useContext<DataContextType>(DataContext);

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      searchUsers()
    }
  }

  return (
    <div className="searchBarContainer">
      <p>Encontre perfis no Github</p>
      <div className="search">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
          className="searchBar"
          onKeyDown={handleKeyDown}
          placeholder="Nome"
        />
        <button onClick={searchUsers}>
          <span className="material-symbols-outlined">
            search
          </span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar