export interface DataContextType {
  searchValue: string;
  data: {
    items: [],
    total_count: number
  };
  error: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchUsers: () => void;
}