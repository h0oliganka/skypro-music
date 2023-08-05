import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/loginUser'
import { RegisterUser } from './pages/register/registerUser'
import { Main } from './pages/mainFolder/main'
import { MyTracks } from './pages/myTracks/myTracks'

export const AppRoutes = ({ loading }) => {
  return (
    <Routes>
      <Route path="/" element={<Main loading={loading} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/my_playlist" element={<MyTracks loading={loading} />} />
    </Routes>
  )
}
