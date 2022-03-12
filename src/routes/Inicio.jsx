import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Inicio = () => {

  const { user, signIn, signOut } = useContext(UserContext)

  return (
    <div>
      <h1>Inicio</h1>
      <h2>
        {
          user? 'conectado' : 'desconectado'
        }
      </h2>
      {
        user ? (
          <>
          <button
            className="btn btn-danger"
            onClick={signOut}>
              Cerrar sesion
          </button>
          <Link to='protegida' className = 'btn btn-warning ms-2'>Ruta protegida</Link>
          </>
        ):(
          <button
            className="btn btn-primary"
            onClick={signIn}>
              Acceder
          </button>
        )
      }

    </div>
  )
}

export default Inicio