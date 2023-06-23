import { render } from '@testing-library/react';
import User from '../../components/User/User';

describe('User component', () => {
  const user = {
    id: 1,
    login: 'test_user',
    avatar_url: 'https://example.com/avatar.jpg',
    html_url: 'https://example.com/test_user',
  };

  it('should render User component properly', () => {
    const { getByRole, getByText } = render(<User user={user} />);
    const listItem = getByRole('listitem');
    const avatar = getByRole('img');
    const username = getByText(user.login);
    const link = getByText('Visitar perfil no Github');

    expect(listItem).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('should render user avatar', () => {
    const { getByRole } = render(<User user={user} />);
    const avatar = getByRole('img');

    expect(avatar).toHaveAttribute('src', user.avatar_url);
    expect(avatar).toHaveAttribute('alt', `${user.login} avatar`);
  });

  it('should render user login', () => {
    const { getByText } = render(<User user={user} />);
    const username = getByText(user.login);

    expect(username).toBeInTheDocument();
  });

  it('should set github profile link properly', () => {
    const { getByRole } = render(<User user={user} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', user.html_url);
  });
});