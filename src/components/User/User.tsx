import { UserType } from '../../types/UserType'
import './User.css'

const User = ({user}: UserType) => {
  return (
    <li
      className="userItem"
      key={user.id}
    >
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="userAvatar"
      />
      <div>
        <h2>{user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="anchor"
        >
          <p className="link">
            Visitar perfil no Github{" "}
            <span className="material-symbols-outlined">
              open_in_new
            </span>
          </p>
        </a>
      </div>
    </li>
  )
}

export default User