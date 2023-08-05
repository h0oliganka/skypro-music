import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/loginUser'
import { RegisterUser } from './pages/register/registerUser'
import { Main } from './pages/mainFolder/main'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login_user" element={<Login />} />
      <Route path="/register_user" element={<RegisterUser />} />
    </Routes>
  )
}
