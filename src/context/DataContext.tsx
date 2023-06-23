import { createContext, useState, ReactNode } from "react";

import { request } from "../services/api";
import { DataContextType } from "../types/DataContextType";

const DataContext = createContext<DataContextType>({
  searchValue: '',
  data: {
    items: [],
    total_count: 0
  },
  error: '',
  handleSearchInputChange: () => {},
  searchUsers: () => {}
});

const DataProvider = ({children}: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState({})
  const [error, setError] = useState()

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const searchUsers = async () => {
    try {
      const responseData = await request(searchValue);
      setData(responseData);
      setError(undefined);
    } catch (error) {
      setError(error.message);
    }
  };

  const contextValue: DataContextType = {
    searchValue,
    handleSearchInputChange,
    searchUsers,
    data,
    error
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );

}

export {DataContext, DataProvider}