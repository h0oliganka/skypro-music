import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/login'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
