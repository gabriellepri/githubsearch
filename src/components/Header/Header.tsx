import logo from '../../assets/images/logo.svg'

import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="GithubSearch logo" className="logo" />
      <h1 className="title">GitHub Search</h1>
    </header>
  )
}

export default Header