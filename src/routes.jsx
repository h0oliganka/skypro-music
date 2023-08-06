import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/loginUser'
import { RegisterUser } from './pages/register/registerUser'
import { Main } from './pages/mainFolder/main'
import { MyTracks } from './pages/myTracks/myTracks'
import { PlaylistOfTheDay } from './pages/compilations/playlistOfTheDay'
import { DanceHits } from './pages/compilations/100DanceHits'
import { IndieCharge } from './pages/compilations/indieCharge'

export const AppRoutes = ({ loading }) => {
  return (
    <Routes>
      <Route path="/" element={<Main loading={loading} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/my_playlist" element={<MyTracks loading={loading} />} />
      <Route
        path="/playlistOfTheDay"
        element={<PlaylistOfTheDay loading={loading} />}
      />
      <Route path="/danceHits" element={<DanceHits loading={loading} />} />
      <Route path="/indieCharge" element={<IndieCharge loading={loading} />} />
    </Routes>
  )
}
