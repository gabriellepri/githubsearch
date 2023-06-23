import { useContext } from 'react'

import User from '../User/User'
import { DataContext } from '../../context/DataContext'
import { DataContextType } from '../../types/DataContextType'
import { UserType } from '../../types/UserType'

import './UserList.css'

const UserList = () => {
  const {data, error} = useContext<DataContextType>(DataContext)

  const renderData = () => {
    if (data?.items?.length > 0 && !error) {
      return (
        <div className="userListContainer">
          <div className="userListStack">
            <ul>
              {data.items?.map((user: UserType) => (
                <User key={user.id} user={user} />
              ))}
            </ul>
            <p className="userAmountInfo">
              Exibindo {data?.items?.length} de {data?.total_count} usuários
              encontrados
            </p>
          </div>
        </div>
      )
    } 

    if (error) {
      return (
        <div className="userListContainer">
          <p>
            Tivemos um problema ao buscar o usuário. Por favor, tente 
            novamente em alguns instantes ou revise o nome inserido.
          </p>
        </div>
      )
    }
  }
  
  return (
    renderData()
  )
}

export default UserList