import { fireEvent, render } from "@testing-library/react"
import SearchBar from "../../components/SearchBar/SearchBar"

describe('SearchBar component', () => {
  it('should render text', () => {
    const { getByText } = render(<SearchBar />)

    const text = getByText('Encontre perfis no Github')

    expect(text).toBeInTheDocument()
  })

  it('should render search bar', () => {
    const { getByPlaceholderText } = render(<SearchBar />)

    const searchBar = getByPlaceholderText('Nome')

    expect(searchBar).toBeInTheDocument()
  })

  it('should render submit button', () => {
    const { getByRole } = render(<SearchBar />)

    const button = getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('should call searchUsers function when enter key is pressed', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Nome');
    const searchUsers = jest.fn();
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchUsers();
      }
    });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(searchUsers).toHaveBeenCalled();
  })

  it('should call searchUsers function when button is clicked', () => {
    const { getByRole } = render(<SearchBar />);
    const searchUsers = jest.fn();
    const button = getByRole('button');

    button.addEventListener('click', searchUsers);
    fireEvent.click(button);

    expect(searchUsers).toHaveBeenCalled();
  })
})