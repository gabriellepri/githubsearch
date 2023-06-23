import { render } from '@testing-library/react';
import UserList from '../../components/UserList/UserList';
import { DataContext } from '../../context/DataContext';

describe('UserList component', () => {
  it('should render user list when data is available', () => {
    const data = {
      items: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
      ],
      total_count: 2,
    };
    const { getByText } = render(<UserList />, { 
      wrapper: ({ children }) => 
        <DataContext.Provider value={{ data }}>
          {children}
        </DataContext.Provider>
    });

    const linkElement = getByText(/Exibindo 2 de 2 usuários encontrados/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render error message when there is an error', () => {
    const error = 'Error message';
    const { getByText } = render(<UserList />, {
      wrapper: ({ children }) => 
        <DataContext.Provider value={{ error }}>
          {children}
        </DataContext.Provider>
      });
    const linkElement = getByText(/Tivemos um problema ao buscar o usuário/i);
    expect(linkElement).toBeInTheDocument();
  });
})