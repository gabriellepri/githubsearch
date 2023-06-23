import { render } from '@testing-library/react'
import Header from '../../components/Header/Header'

describe('Header component', () => {
  it('should render title', () => {
    const { getByText} = render(<Header />);

    const title = getByText('GitHub Search')

    expect(title).toBeInTheDocument()
  });

  it('should render logo', () => {
    const { getByAltText } = render(<Header />)

    const logo = getByAltText('GithubSearch logo')

    expect(logo).toBeInTheDocument()
  })
});