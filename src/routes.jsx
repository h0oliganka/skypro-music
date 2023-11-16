import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/mainFolder/main'
import { MyTracks } from './pages/myTracks/myTracks'
import { PlaylistOfTheDay } from './pages/compilations/playlistOfTheDay'
import { DanceHits } from './pages/compilations/DanceHits'
import { IndieCharge } from './pages/compilations/indieCharge'
import { ProtectedRoute } from './pages/protected/protected'
import { NotFound } from './pages/404/NotFound'
import { useState } from 'react'
import AuthPage from './pages/auth/AuthPage'

export const AppRoutes = ({ isLoggedIn }) => {

  const [activTrack, setActivTrack] = useState(null)

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} activTrack={activTrack} setActivTrack={setActivTrack} />}>
        <Route path="/favorites" element={<MyTracks activTrack={activTrack} setActivTrack={setActivTrack} />} />
        <Route path="/category/1" element={<PlaylistOfTheDay />} />
        <Route path="/" element={<Main activTrack={activTrack} setActivTrack={setActivTrack} />} />
        <Route path="/category/2" element={<DanceHits />} />
        <Route path="//category/3" element={<IndieCharge />} />
      </Route>

      <Route
        path="/login"
        element={<AuthPage isLoginMode={true} />}
      />
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
