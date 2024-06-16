import { Navigate, Outlet } from "react-router-dom"

const AuthLayout = () => {

    const login = false;

    if(login) {
        return <Navigate to={"/"} />
    }
  return (
    <Outlet />
  )
}

export default AuthLayout

