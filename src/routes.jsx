import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/loginUser'
import { RegisterUser } from './pages/register/registerUser'
import { Main } from './pages/mainFolder/main'
import { MyTracks } from './pages/myTracks/myTracks'
import { PlaylistOfTheDay } from './pages/compilations/playlistOfTheDay'
import { DanceHits } from './pages/compilations/DanceHits'
import { IndieCharge } from './pages/compilations/indieCharge'
import { ProtectedRoute } from './pages/protected/protected'
import { NotFound } from './pages/404/NotFound'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(localStorage.getItem('Token'))} />}>
        <Route path="/favorites" element={<MyTracks />} />
        <Route path="/category/1" element={<PlaylistOfTheDay />} />
        <Route path="/" element={<Main />} />
        <Route path="/category/2" element={<DanceHits />} />
        <Route path="//category/3" element={<IndieCharge />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
