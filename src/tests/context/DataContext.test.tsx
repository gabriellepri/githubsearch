import { fireEvent, render, waitFor } from '@testing-library/react';
import { DataContext, DataProvider } from '../../context/DataContext'

describe('DataContext', () => {
  const mockRequest = jest.fn();

  beforeAll(() => {
    jest.mock('../../services/api', () => ({
      request: mockRequest,
    }));
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should update searchValue properly', () => {
    const { getByRole } = render(
      <DataProvider>
        <DataContext.Consumer>
          {(value) => (
            <input
              type="text"
              value={value.searchValue}
              onChange={value.handleSearchInputChange}
            />
          )}
        </DataContext.Consumer>
      </DataProvider>
    );

    const input = getByRole('textbox');
    const newValue = 'test';

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: newValue } });

    expect(input).toHaveValue(newValue);
  });

  it('should provide the correct initial values', () => {
    const { container } = render(
      <DataContext.Provider value={{ searchValue: '', data: {}, handleSearchInputChange: jest.fn(), searchUsers: jest.fn() }}>
        <DataContext.Consumer>
          {({ searchValue, data }) => (
            <div data-testid="test-component">
              <span data-testid="search-value">{searchValue}</span>
              <span data-testid="data">{JSON.stringify(data)}</span>
            </div>
          )}
        </DataContext.Consumer>
      </DataContext.Provider>
    );
  
    expect(container.querySelector('[data-testid="search-value"]')?.textContent).toBe('');
    expect(container.querySelector('[data-testid="data"]')?.textContent).toBe('{}');
  });

  it('should call searchUsers function on button click', async () => {
    const mockSearchUsers = jest.fn();

    const { container } = render(
      <DataContext.Provider value={{ searchValue: 'example', searchUsers: mockSearchUsers }}>
        <DataContext.Consumer>
          {({ searchUsers }) => (
            <button onClick={searchUsers} data-testid="search-button">Search</button>
          )}
        </DataContext.Consumer>
      </DataContext.Provider>
    );

    const searchButton = container.querySelector('[data-testid="search-button"]');
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockSearchUsers).toHaveBeenCalled();
    });
  });
});